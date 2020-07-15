FROM node:lts as builder
WORKDIR /var/www/app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /var/www/app/build /var/www/app
COPY nginx.conf /etc/nginx/conf.d/default.conf