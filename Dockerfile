# Use an official Node.js image as the base image
# Base stage
FROM node:18 AS base

# set the working directory inside the container

WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
FROM base AS frontend

COPY package*.json ./
RUN npm install

# Install a lightweight web server to serve the static files
RUN npm install -g serve 

# Copy the rest of the app code into the container
COPY . .

# Build the Vite app
RUN npm run build

# Expose port 3000 (or whichever port you want for the frontend)
EXPOSE 3000

# Start the app with serve
CMD ["serve", "-s", "dist", "-l", "3000"]

FROM base AS server
# Install a lightweight json-server
RUN npm install -g json-server

# Copy the jobs.json file into the container
COPY jobs.json .

# Expose port 4000 for json-server
EXPOSE 4000

# Run json-server with the specified JSON file and port
CMD ["json-server", "--watch", "jobs.json", "--port", "4000"]