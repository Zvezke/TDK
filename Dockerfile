FROM node:18.19.0-alpine

ARG NEXT_PUBLIC_RAILWAY_URL

RUN apk add --no-cache pnpm openssl build-base python3 vips-dev

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . ./

RUN pnpm run build

CMD pnpm run start