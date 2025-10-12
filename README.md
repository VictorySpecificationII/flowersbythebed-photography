# Flowersbythebed Photography Portfolio

**Overview**  
This is a small React application built for a friend to showcase her photography portfolio. I built it from scratch in four days, focusing on creating a modern, responsive frontend experience for displaying photography work.  

**Key Points**  
- **Frontend:** Built with React and Vite, using modern best practices.  
- **Design:** Minimalistic, photo-centric design to highlight portfolio content.  
- **Development:** Rapid iteration. Developed in just four days from idea to working application.  
- **Infrastructure:** Terraform used for basic infrastructure-as-code setup.  
- **CI/CD:** Instructions and scripts provided to demonstrate automated build and deployment workflows (Docker-based).  

**Why It Matters**  
This project isn’t just a demo. It’s a fully functional portfolio application with end-to-end consideration, including automation and infrastructure management. It demonstrates:  
- Rapid frontend development  
- Awareness of modern deployment pipelines  
- Practical understanding of IaC and production readiness  

**Notes**  
- This README focuses on the application and development process; deployment and infrastructure instructions are provided separately.  
- The goal was to produce a real, usable portfolio site in a short amount of time, rather than a tutorial or experiment.
- I could have gone with more AWS services, especially for CI/CD, but costs are a consideration - the current CI/CD implementation is not how I would do it in a larger scale, less
constrained project.

## Features

This portfolio application demonstrates a modern React setup with interactive and visually appealing components:

- **Home:** Full-screen image carousel with automatic rotation, parallax background, sticky artist overlay, and navigation dots/arrows.
- **About Me:** Parallax header, multiple content sections (Photographer / Maker / Artist), glassy overlay elements, and camera gear listing.
- **Portfolio:** Masonry-style image gallery, featured glassy rectangle overlay, fully responsive layout.
- **Projects:** Scroll-based parallax, project showcase grid, clickable cards opening gallery modals.
- **Contact:** Interactive contact card with hover effects, background visuals, and page fade overlay animation.
- **Preloader:** Full-page spinner with fade-out animation before content loads.
- **General:** Responsive design, reusable subcomponents, smooth scrolling, and modular architecture.

**Libraries used:** React, React Router DOM, react-masonry-css, react-slick, slick-carousel, and yet-another-react-lightbox — providing modern interactive functionality and polished user experience.


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

Every time you update the application, you have to push the image and start it manually. For now.

## Todo:

[ ] Automate CI/CD through BASH.
[ ] Grab real pictures from said friend and populate sections.
