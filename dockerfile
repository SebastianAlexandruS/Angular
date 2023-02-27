
# FROM node:latest AS build
# WORKDIR /app
# RUN npm cache clean --force
# COPY . .
# RUN npm install
# RUN npm run build --prod


# FROM nginx:latest
# COPY --from=build /app/dist/ng-map /usr/share/nginx/html
# COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# EXPOSE 80




FROM node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

CMD ["npm", "start"]

FROM nginx:alpine

COPY --from=builder /app/dist/ng-map /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf