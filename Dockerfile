FROM node:9.11.1-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install --production && yarn cache clean
RUN yarn build --production

FROM nginx:1.13.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80