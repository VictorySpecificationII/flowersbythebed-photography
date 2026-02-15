# Flowersbythebed Photography Portfolio

## Overview

This project combines a containerized **React application** with fully automated infrastructure provisioning and deployment using **Terraform and AWS**.

The application was built for a friend to showcase her photography portfolio, while the underlying infrastructure demonstrates reproducible container deployment, CI/CD automation, and Infrastructure as Code practices. The environment provisions networking, container registry, build pipeline, and runtime orchestration automatically, enabling end-to-end deployment from source control to running workloads.

The infrastructure and deployment pipeline are fully functional; the application is awaiting final content before public release.

**Key Points:**

- **Frontend:** React + Vite  
- **Design:** Minimalistic, photo-centric  
- **Infrastructure as Code:** Terraform-managed AWS infrastructure  
- **CI/CD:** Automated pipeline using CodePipeline and CodeBuild  
- **Container Runtime:** AWS ECS (Fargate) with Docker images stored in ECR  
- **Observability:** CloudWatch logging for container runtime visibility  

---

## Infrastructure Architecture

Infrastructure is fully provisioned using Terraform and includes:

- VPC, subnet, internet gateway, and routing
- ECR repository for container image storage
- ECS cluster and Fargate service for container orchestration
- CodePipeline and CodeBuild for automated CI/CD
- S3 artifact storage for pipeline stages
- Secrets Manager for secure GitHub token storage
- CloudWatch log groups for container observability

Deployment flow:


```
GitHub → CodePipeline → CodeBuild → Docker build → ECR → ECS (Fargate)
```


This enables fully automated, reproducible infrastructure provisioning and container deployment.

---

## Key Infrastructure Features

- Infrastructure defined entirely using Terraform
- Automated CI/CD pipeline triggered by GitHub commits
- Docker image build and push to ECR
- Automated ECS deployment and rolling updates
- CloudWatch logging for runtime observability
- Secrets stored securely in AWS Secrets Manager
- Fully reproducible environment provisioning

---

## Application Features

- **Home:** Full-screen image carousel, automatic rotation, parallax background, sticky artist overlay, navigation dots/arrows  
- **About Me:** Parallax header, multiple content sections, glassy overlay elements, camera gear listing  
- **Portfolio:** Masonry-style image gallery, responsive layout, featured glassy overlay  
- **Projects:** Scroll-based parallax, project showcase grid, gallery modals  
- **Contact:** Interactive card with hover effects and background visuals  
- **Preloader:** Full-page spinner with fade-out animation  
- **General:** Responsive design, reusable subcomponents, smooth scrolling, modular architecture  

**Libraries Used:**

- React  
- React Router DOM  
- react-masonry-css  
- react-slick  
- slick-carousel  
- yet-another-react-lightbox  

---

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js v22+  
- npm v9+  
- Terraform v1.5+  
- AWS CLI configured  
- Docker  

---

## Local Setup

### Installing Node.js and npm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
source ~/.bashrc

nvm install 22
nvm use 22
nvm alias default 22

node -v
npm -v
```

### Installing dependencies

```bash
npm install
```

### Running the project locally

```bash
npm run dev -- --host
```

`--host` allows access from other devices on your network. Useful when testing on mobile. Alternatively on Firefox you can use Ctrl+Shift+M.

## Deployment on AWS

This project uses Terraform to provision infrastructure and deploy the containerized application via ECS.

Step 1: GitHub Personal Access Token

Create a GitHub PAT with repository access.

Step 2: AWS Credentials

Export your AWS credentials:

```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_SESSION_TOKEN="your-session-token"
```

Step 3: Terraform Environment Variables

```bash
export TF_VAR_github_oauth_token="your-GitHub-PAT"
export TF_VAR_github_owner="your-GitHub-username"
export TF_VAR_github_repo="your-repo-name"
```

Step 4: Deploy Infrastructure

```bash
cd iac/
terraform init
terraform plan
terraform apply
```

The pipeline will automatically:

- Build the Docker image
- Push it to ECR
- Deploy or update the ECS service

---

### Observability

The deployment includes runtime observability via:

- CloudWatch log groups for container logs
- ECS service state monitoring
- CodePipeline execution history for deployment tracking
- CodeBuild logs for build diagnostics

This enables inspection of container behavior and deployment lifecycle.

---

### Additional Notes

- The CI/CD pipeline automatically triggers on merges to the main branch
- ECS service currently uses public IP and allows HTTP access on port 80
- CloudWatch logs capture container stdout/stderr
- AdministratorAccess IAM roles are used in this PoC for simplicity; production deployments should use least-privilege policies

---

### Warning

Running the following command will destroy infrastructure and delete associated resources:

```bash
terraform destroy
```

This includes ECR repositories and S3 artifact storage.

---

### Design Intent

This project exists to demonstrate Infrastructure as Code, container lifecycle automation, and CI/CD-driven deployment.

The infrastructure is designed to be fully reproducible, allowing automated provisioning, build, and deployment of containerized workloads with minimal manual intervention.

The deployed application serves as a real-world workload to validate the deployment pipeline.

### Future Work

 - [ ] Add an Application Load Balancer (ALB)

 - [ ] Switch from :latest to digest-based image versioning

 - [ ] Introduce staging and production environments

 - [ ] Reduce IAM permissions to least privilege

