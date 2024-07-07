# Use the official Node.js image with a specified version (example: 14-alpine)
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build TypeScript
RUN npm run build

# Stage 2 - Build production assets
FROM nginx:alpine

# Copy build output from previous stage
COPY --from=build /app/frontend/build /usr/share/nginx/html

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["nginx", "-g", "daemon off;"]
