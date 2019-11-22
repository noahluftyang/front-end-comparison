# STAGE build
FROM node:12.13-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

# STAGE serve
FROM nginx:1.17-alpine

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist ./

EXPOSE 80
