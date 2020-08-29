# FROM node:14 as build

# WORKDIR /app

# COPY . /app

# RUN npm install && npm run build

# FROM nginx:latest

# COPY --from=build /app/dist/limpio-y-bueno-app /usr/share/nginx/html

# COPY .docker/config /etc/nginx/conf.d

# RUN apt update && \
#     apt install certbot python-certbot-nginx -y

FROM node:14

WORKDIR /app

COPY . /app

RUN npm install pm2 -g

RUN npm install && \
    npm run build:ssr

CMD ["pm2-runtime", "start", "ecosystem.config.js"]