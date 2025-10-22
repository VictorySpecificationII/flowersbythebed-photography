Create a PAT on GitHub

Grab your keys from Amazon

on your terminal, run

export AWS_ACCESS_KEY_ID="accesskeyfromamazon"

export AWS_SECRET_ACCESS_KEY="secretkeyfromamazon"

export AWS_SESSION_TOKEN="tokenfromamazon"


Run these on your terminal

export TF_VAR_github_oauth_token="insertYourPAThere>"
export TF_VAR_github_owner="yourGHusername"
export TF_VAR_github_repo="yourRepoName"

then

terraform init
terraform plan
terraform apply

WARNING

On destroy, ECR and S3 are FORCE DELETED	