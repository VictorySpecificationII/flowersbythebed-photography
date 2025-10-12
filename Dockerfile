FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve static files
RUN npm install -g serve

# Expose port
EXPOSE 8044

# Serve the build folder
CMD ["serve", "-s", "dist", "-l", "8044"]
