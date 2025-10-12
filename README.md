# Flowersbythebed Photography Portfolio

Full-stack React portfolio site, production-deployed with CI/CD pipelines and AWS infrastructure automation via Terraform, featuring smooth SPA transitions and responsive design.

I built a portfolio site from first principles. I applied system design thinking to front-end architecture - routes, states, motion, and composition. Every decision, from media behavior to animation, reflects an engineer’s process translated into design.\

With CI/CD via Docker and IaC through AWS, this is an exercise in end-to-end system design, from local React development to automated, versioned cloud deployment.


# Init steps

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
source ~/.bashrc

nvm --version

nvm install 22
nvm use 22
nvm alias default 22

node -v
npm -v

npm create vite@8.0.2 andri-portfolio -- --template react #or latest if you're feeling adventurous

npm run dev -- --host

```

# If you've just downloaded this project

```
npm install
npm run dev
```

# If you want to build for production

```
npm install -g serve
serve -s ./dist -l 8044
```

# Running on AWS

On your localhost, run:

```
docker build -t flowersbythebed:latest .
docker run -p 8044:8044 flowersbythebed:latest
```

Then you can spin up the infrastructure by exporting your AWS programmatic credentials in your terminal and running, in the terraform directory:

```
terraform init
terraform plan
terraform apply
```

The IaC will provide you with the instructions to log in to the box, where you can run

```
sudo snap install docker
```

On your localhost, in the project root directory run:

```
docker save -o flowersbythebed.tar flowersbythebed
scp -i terraform/<keyname> flowersbythebed.tar ubuntu@remote_host:/home
```

On the remote machine, you can run:

```
docker load -i /home/ubuntu/flowersbythebed.tar
```

You can and then you can deploy it using

```
docker run -d -p 8044:8044 --name flowersbythebed --restart always flowersbythebed
```
