FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install @vitejs/plugin-vue@4.0.0

RUN npm install

EXPOSE 3000


COPY . .

RUN npm run build

CMD ["serve", "-s", "dist"]