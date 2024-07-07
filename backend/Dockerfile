# Use the official Node.js image with a specified version (example: 14-alpine)
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port your app runs on
EXPOSE 5000

# Command to run your app
CMD ["npm", "start"]
