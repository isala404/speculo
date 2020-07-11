FROM node:13 as builder

WORKDIR /app

COPY package.json .

COPY package-lock.json* .

RUN npm install

FROM node:13

WORKDIR /app

COPY --from=builder /app /app

COPY ./tsconfig.json /app

COPY ./src /app/src

RUN mkdir -p ./images

#CMD npm run build

ENV NODE_ENV production

CMD npm run prod

#
#
#FROM node:13
#
#WORKDIR /app
#
#COPY package.json /app
#
#RUN npm install
#
#COPY ./tsconfig.json /app
#
#COPY ./src /app/src
#
#COPY ./.gitignore /app
#
#RUN mkdir -p ./images
#
#CMD npm run build
#
#ENV  NODE_ENV production
#
#CMD npm run prod
