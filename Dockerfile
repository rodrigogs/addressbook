FROM node:8.11.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

CMD [ "node", "bin/www" ]
