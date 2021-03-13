# base node image
FROM node:latest

# Create working directory
WORKDIR /usr/src/app

# install application dependencies
# copy across project confguration information
COPY package*.json ./

# Install the dependencies
RUN npm install

# copy across all of the project files
COPY . .

# expose the application on port 3000
EXPOSE 3000

# Set the entry script
ENTRYPOINT ["npm", "start"]