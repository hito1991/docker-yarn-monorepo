ARG NODE_VERSION=20

FROM --platform=linux/amd64 node:$NODE_VERSION-bookworm-slim as dev
ARG YARN_VERSION=4.0.2
WORKDIR /app

RUN corepack enable && corepack prepare yarn@$YARN_VERSION && yarn set version $YARN_VERSION
COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn install
