FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# Use a base image with Java
FROM maven:3.8.6-openjdk-17 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy the pom.xml and source code
COPY pom.xml ./
COPY src ./src

# Build the application (this step can also create the build artifact)
RUN mvn clean package
