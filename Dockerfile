FROM node:18-slim as buildWithTsc
WORKDIR /usr/src/app

ENV NODE_ENV=development
ENV PYTHONUNBUFFERED=1

COPY . .

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    make \
    g++ \
    build-essential \
    && ln -sf python3 /usr/bin/python \
    && yarn install --frozen-lockfile \
    && yarn build

FROM node:18-slim as production
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY ./package.json ./yarn.lock ./

ENV PYTHONUNBUFFERED=1
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    make \
    g++ \
    build-essential \
    && ln -sf python3 /usr/bin/python \
    && yarn install --frozen-lockfile \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=buildWithTsc /usr/src/app/dist ./dist

CMD ["yarn", "start:prod"]

EXPOSE 7799