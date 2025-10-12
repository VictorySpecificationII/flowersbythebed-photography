terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ─── Variables ──────────────────────────────────────────────
variable "aws_region" { default = "eu-west-1" }
variable "prefix" { default = "eminencefront-single" }
variable "vpc_cidr" { default = "10.0.0.0/16" }
variable "subnet_cidr" { default = "10.0.1.0/24" }
variable "instance_type" { default = "t2.micro" }
variable "ssh_cidr" { default = "0.0.0.0/0" }

# ─── Networking ─────────────────────────────────────────────
resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  tags       = { Name = "${var.prefix}-vpc" }
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.subnet_cidr
  map_public_ip_on_launch = true
  tags                    = { Name = "${var.prefix}-subnet" }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
  tags   = { Name = "${var.prefix}-igw" }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
  tags = { Name = "${var.prefix}-rt" }
}

resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

# ─── Security Group ─────────────────────────────────────────
resource "aws_security_group" "ssh" {
  name        = "${var.prefix}-ssh"
  description = "Allow SSH inbound traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.ssh_cidr]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [var.ssh_cidr]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "${var.prefix}-sg" }
}

# ─── Key Pair ───────────────────────────────────────────────
resource "tls_private_key" "main" {
  algorithm = "ED25519"
}

resource "local_file" "key" {
  content         = tls_private_key.main.private_key_openssh
  filename        = "key_${var.prefix}.pem"
  file_permission = "0600"
}

resource "aws_key_pair" "main" {
  key_name   = "${var.prefix}-key"
  public_key = tls_private_key.main.public_key_openssh
}

# ─── EC2 Instance ───────────────────────────────────────────
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}

# Optional IAM role for SSM access
resource "aws_iam_role" "ssm_ec2_role" {
  name = "${var.prefix}-ssm-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "ec2.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ssm_attach" {
  role       = aws_iam_role.ssm_ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_instance_profile" "ssm_profile" {
  name = "${var.prefix}-ssm-profile"
  role = aws_iam_role.ssm_ec2_role.name
}

resource "aws_instance" "main" {
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = var.instance_type
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.ssh.id]
  key_name                    = aws_key_pair.main.key_name
  associate_public_ip_address = true
  iam_instance_profile        = aws_iam_instance_profile.ssm_profile.name

  tags = {
    Name = "${var.prefix}-vm"
    Lab  = "single"
  }

  user_data = <<-EOT
    #!/bin/bash
    apt-get update -y
    apt-get install -y amazon-ssm-agent amazon-cloudwatch-agent
    systemctl enable amazon-ssm-agent
    systemctl start amazon-ssm-agent
  EOT
}

# ─── Outputs ────────────────────────────────────────────────
output "public_ip" {
  value = aws_instance.main.public_ip
}

output "ssh_command" {
  value = "ssh -i key_${var.prefix}.pem ubuntu@${aws_instance.main.public_ip}"
}
