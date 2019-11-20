FROM node:12.13-slim as builder

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM node:12.13-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.cache ./.cache
COPY --from=builder /app/public ./public

RUN yarn --production

EXPOSE 80
ENTRYPOINT ["yarn", "serve", "-p", "80"]
