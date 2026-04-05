FROM node:24-alpine3.23

WORKDIR /app

COPY .. .

RUN npm ci --omit=dev

RUN npm run css:build

ENTRYPOINT ["npm", "start"]
