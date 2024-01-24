FROM --platform=linux/amd64 node:20-bookworm-slim as dev
WORKDIR /app
RUN corepack enable && corepack prepare yarn@4.0.2
COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn install
