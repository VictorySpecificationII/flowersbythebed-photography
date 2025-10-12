# Flowersbythebed Photography Portfolio

Full-stack React portfolio site, production-deployed with CI/CD pipelines and AWS infrastructure automation via Terraform, featuring smooth SPA transitions and responsive design.

I built a portfolio site from first principles. I applied system design thinking to front-end architecture - routes, states, motion, and composition. Every decision, from media behavior to animation, reflects an engineer’s process translated into design.\

With CI/CD and deployment via Github Pages, this is an exercise in end-to-end system design, from local React development to automated, versioned cloud deployment.


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
