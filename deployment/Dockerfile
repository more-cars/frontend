FROM node:24-alpine3.21

WORKDIR /app

COPY .. .

RUN npm ci --omit=dev

RUN npm run css:build

ENTRYPOINT ["npm", "start"]
