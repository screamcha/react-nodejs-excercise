FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production=true

COPY . .

EXPOSE 8080
CMD ["yarn", "start:prod"]