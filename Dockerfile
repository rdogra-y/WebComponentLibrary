# Use the official Node.js LTS image as base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project files
COPY . .

# Build the Storybook static files
RUN npm run build-storybook

# Expose port 8083
EXPOSE 8083

# Start a lightweight HTTP server to serve Storybook correctly
CMD ["npx", "http-server", "/app/storybook-static", "-p", "8083"]
