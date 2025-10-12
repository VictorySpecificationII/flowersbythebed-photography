# Flowersbythebed Photography Portfolio

## Installing npm and initiating a project

You only need to follow the commands up to `npm -v`.

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

## If you've just downloaded this project

```
npm install
npm run dev
```

## Running on AWS

On your localhost, run:

```
docker build -t flowersbythebed:latest .
```

Then you can spin up the infrastructure by exporting your AWS programmatic credentials in your terminal and running, in the `iac/` directory:

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
scp -i <keyname> flowersbythebed.tar ubuntu@remote_host:/home/ubuntu
```

On the remote machine, you can run:

```
sudo docker load -i /home/ubuntu/flowersbythebed.tar
```

You can and then you can deploy it using

```
docker run -d -p 80:8044 --name flowersbythebed --restart always flowersbythebed
```
