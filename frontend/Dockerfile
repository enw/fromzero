# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json .

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Make port 3000 available outside the container
EXPOSE 3000

# Define environment variable
ENV NAME World

# Run npm start command
CMD ["npm", "start"]