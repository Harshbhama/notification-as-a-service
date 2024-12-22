# suppliers-service/Dockerfile

# Use an official Node.js image as the base
FROM node:16

# Create a working directory for the app
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the service runs on
EXPOSE 3001

# Start the application
CMD ["node", "app.js"]
