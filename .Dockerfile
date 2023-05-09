FROM node:current-alpine

# ste working directory
WORKDIR /app

#install app dependencies
COPY package*.json ./
RUN npm install


# add app
COPY . .

# start app
CMD ["npm", "start"]


this a Docker file for the react code
 
