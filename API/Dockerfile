FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./
COPY package.json .
COPY package-lock.json .

RUN npm install

# Bundle app source
COPY dist/ .

EXPOSE 8080
CMD [ "npm", "start" ]
