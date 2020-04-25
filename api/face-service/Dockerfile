FROM node:13

WORKDIR /app

COPY package.json /app

RUN npm install

COPY ./tsconfig.json /app

COPY ./src /app/src

COPY ./.gitignore /app

ENV  NODE_ENV production

CMD npm run prod
