terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ─── Variables ──────────────────────────────────────────────
variable "aws_region" { default = "eu-west-1" }
variable "prefix" { default = "flowersbythebed" }
variable "vpc_cidr" { default = "10.0.0.0/16" }
variable "subnet_cidr" { default = "10.0.1.0/24" }
variable "github_owner" {}
variable "github_repo" {}
variable "github_branch" { default = "main" }
variable "github_oauth_token" {
  description = "GitHub PAT (sensitive, provided via env var)"
  sensitive   = true
}

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

resource "random_string" "github_pat_suffix" {
  length  = 4
  upper   = false
  lower   = true
  number  = true
  special = false
}

# ─── GitHub PAT in Secrets Manager ───────────────────────────
resource "aws_secretsmanager_secret" "github_pat" {
  name = "${var.prefix}-github-pat-${formatdate("YYYYMMDD", timestamp())}-${random_string.github_pat_suffix.result}"
}

resource "aws_secretsmanager_secret_version" "github_pat_version" {
  secret_id     = aws_secretsmanager_secret.github_pat.id
  secret_string = var.github_oauth_token
}

# ─── Artifact Bucket ─────────────────────────────────────────
resource "aws_s3_bucket" "artifacts" {
  bucket_prefix = "${var.prefix}-pipeline-artifacts-"
  force_destroy = true
}

# ─── CodeBuild IAM Role ─────────────────────────────────────
resource "aws_iam_role" "codebuild_role" {
  name = "${var.prefix}-codebuild-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "codebuild.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "codebuild_policy" {
  role       = aws_iam_role.codebuild_role.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

# ─── CodeBuild Project ───────────────────────────────────────
resource "aws_codebuild_project" "terraform_build" {
  name         = "${var.prefix}-build"
  service_role = aws_iam_role.codebuild_role.arn

  artifacts { type = "CODEPIPELINE" }

  environment {
    compute_type    = "BUILD_GENERAL1_SMALL"
    image           = "aws/codebuild/standard:7.0"
    type            = "LINUX_CONTAINER"
    privileged_mode = true
  }

  source {
    type      = "CODEPIPELINE"
    buildspec = <<-EOF
      version: 0.2
      env:
        variables:
          ECR_REPOSITORY: ${aws_ecr_repository.app.repository_url}
          IMAGE_TAG: "latest"
      phases:
        pre_build:
          commands:
            - echo Logging in to Amazon ECR...
            - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $ECR_REPOSITORY
        build:
          commands:
            - echo Build started on `date`
            - echo Building the Docker image...
            - docker build -t $ECR_REPOSITORY:$IMAGE_TAG .
            - docker tag $ECR_REPOSITORY:$IMAGE_TAG $ECR_REPOSITORY:$IMAGE_TAG
        post_build:
          commands:
            - echo Pushing the Docker image...
            - docker push $ECR_REPOSITORY:$IMAGE_TAG
            - echo Build completed on `date`
      artifacts:
        files: "**/*"
    EOF
  }
}

# ─── CodePipeline IAM Role ───────────────────────────────────
resource "aws_iam_role" "codepipeline_role" {
  name = "${var.prefix}-codepipeline-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "codepipeline.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "codepipeline_policy" {
  role       = aws_iam_role.codepipeline_role.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

# ─── CodePipeline ────────────────────────────────────────────
resource "aws_codepipeline" "terraform_pipeline" {
  name     = "${var.prefix}-pipeline"
  role_arn = aws_iam_role.codepipeline_role.arn

  artifact_store {
    location = aws_s3_bucket.artifacts.bucket
    type     = "S3"
  }

  stage {
    name = "Source"
    action {
      name             = "SourceFromGitHub"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner      = var.github_owner
        Repo       = var.github_repo
        Branch     = var.github_branch
        OAuthToken = aws_secretsmanager_secret_version.github_pat_version.secret_string
      }
    }
  }

  stage {
    name = "Deploy"
    action {
      name            = "Terraform"
      category        = "Build"
      owner           = "AWS"
      provider        = "CodeBuild"
      version         = "1"
      input_artifacts = ["source_output"]
      configuration = {
        ProjectName = aws_codebuild_project.terraform_build.name
      }
    }
  }
}

# ─── ECR Repository ─────────────────────────────────────────
resource "aws_ecr_repository" "app" {
  name = "${var.prefix}-app"
  force_delete  = true
}

# ─── Outputs ────────────────────────────────────────────────
output "pipeline_url" {
  value = "https://${var.aws_region}.console.aws.amazon.com/codesuite/codepipeline/pipelines/${aws_codepipeline.terraform_pipeline.name}/view"
}