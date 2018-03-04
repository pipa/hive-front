FROM node:9.7.1-alpine

# Create directory and change to it
WORKDIR /webroot/default/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
