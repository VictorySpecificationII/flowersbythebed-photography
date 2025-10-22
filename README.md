# Flowersbythebed Photography Portfolio

## Overview
This is a small, production-deployed **React application** built for a friend to showcase her photography portfolio. The initial version was built from scratch in four days, focusing on a modern, responsive frontend experience. It has since evolved with enhanced features and AWS CI/CD integration.

**Key Points:**
- **Frontend:** React + Vite  
- **Design:** Minimalistic, photo-centric  
- **Development Speed:** Rapid iteration, production-ready in four days  
- **CI/CD:** Automated AWS pipelines using Terraform  
- **Infrastructure:** AWS ECS, ECR, S3, CodePipeline, CodeBuild

---

## Features
- **Home:** Full-screen image carousel, automatic rotation, parallax background, sticky artist overlay, navigation dots/arrows.  
- **About Me:** Parallax header, multiple content sections, glassy overlay elements, camera gear listing.  
- **Portfolio:** Masonry-style image gallery, responsive layout, featured glassy overlay.  
- **Projects:** Scroll-based parallax, project showcase grid, gallery modals.  
- **Contact:** Interactive card with hover effects and background visuals.  
- **Preloader:** Full-page spinner with fade-out animation.  
- **General:** Responsive design, reusable subcomponents, smooth scrolling, modular architecture.  

**Libraries Used:**  
React, React Router DOM, react-masonry-css, react-slick, slick-carousel, yet-another-react-lightbox.

---

## Prerequisites
Before running the project, ensure you have the following installed:  
- Node.js v22+  
- npm v9+  
- Terraform v1.5+  
- AWS CLI configured

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

### Creating a new Vite React project (if starting from scratch)
```bash
npm create vite@8.0.2 flowersbythebed-portfolio -- --template react
```

### Running the project locally
```bash
npm install
npm run dev -- --host
```
> `--host` allows the app to be accessible from other devices on your network.

---

## Deployment on AWS
This project uses **Terraform** to manage AWS infrastructure and deploy the app via ECS.

### Steps:
1. **GitHub Personal Access Token**  
   - Create a PAT on GitHub with repo access.  

2. **AWS Credentials**  
   Export your AWS keys in the terminal:
```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_SESSION_TOKEN="your-session-token"
```

3. **Terraform Environment Variables**  
```bash
export TF_VAR_github_oauth_token="your-GitHub-PAT"
export TF_VAR_github_owner="your-GitHub-username"
export TF_VAR_github_repo="your-repo-name"
```

4. **Deploy Infrastructure**
```bash
cd iac/
terraform init
terraform plan
terraform apply
```

> **Note:** The pipeline will build the Docker image, push it to ECR, and deploy the ECS service.

---

## Warning
- Running `terraform destroy` will **force delete** ECR repositories and S3 buckets. Use with caution.  

---

## Additional Notes
- The CI/CD pipeline automatically triggers on merges to the main branch.  
- ECS service is currently configured with public IP, security group allows HTTP (port 80).  
- CloudWatch logs are enabled for debugging container output.


## Future Work

 - [ ] Add an ALB in front of the setup.
 - [ ] Switch from `:latest` to a digest approach for images.
 - [ ] Consider a staging environment.

