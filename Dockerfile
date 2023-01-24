FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g yarn

RUN yarn install

EXPOSE 3000

COPY . .

RUN npm run build

CMD ["serve", "-s", "dist"]