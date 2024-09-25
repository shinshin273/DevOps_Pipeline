FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Install dev dependencies for testing
RUN npm install --only=dev

# Expose the port
EXPOSE 3000

# Default command to start the app
CMD ["npm", "start"]
