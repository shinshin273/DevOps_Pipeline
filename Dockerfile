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

# Use the official Maven image as the base image
FROM maven:3.8.5-openjdk-11 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy the pom.xml and any other necessary files to the working directory
COPY pom.xml .
COPY src ./src

# Install dependencies and build the application
RUN mvn clean package

# Use a lightweight image to run the application
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the built jar from the build stage
COPY --from=build /usr/src/app/target/*.jar app.jar

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["java", "-jar", "app.jar"]

