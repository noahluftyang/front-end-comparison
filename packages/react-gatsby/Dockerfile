FROM node:12.13-slim

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

RUN ls

EXPOSE 80
ENTRYPOINT ["yarn", "serve", "-p", "80"]
