FROM node:10

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV  NODE_ENV production

CMD npm start
