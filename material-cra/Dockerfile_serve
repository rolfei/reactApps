# Use an official Node runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Copy the application files to the working directory
COPY . .

RUN npm run build

# Install the application dependencies
RUN npm install -g serve

# Make the application's port available to the outside world
EXPOSE 3000

# Define the command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]
