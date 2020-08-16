FROM node:14 as build

WORKDIR /app

COPY . /app

RUN npm install && npm run build

FROM nginx:latest

COPY --from=build /app/dist/limpio-y-bueno-app /usr/share/nginx/html

COPY .docker/config /etc/nginx/conf.d