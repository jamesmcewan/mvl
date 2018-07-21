FROM node:10.7.0-alpine AS build
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build --production

FROM nginx:1.13.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80