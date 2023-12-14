FROM node:18.19.0-alpine

ARG NEXT_PUBLIC_RAILWAY_URL

RUN apk add --no-cache openssl build-base python3 vips-dev

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . ./

RUN npm run build

CMD npm run start