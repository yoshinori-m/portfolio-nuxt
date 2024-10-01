FROM node:22.9-alpine3.19

RUN apk update && \
    apk upgrade && \
    apk add git && \
    npm install -g npm@10.8.3