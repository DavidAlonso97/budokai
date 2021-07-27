FROM node:14-buster

RUN apt install python3

COPY ["package.json", "/usr/src/service/"]

WORKDIR /usr/src/service

RUN yarn install

COPY [".", "/usr/src/service/"]

CMD ["yarn", "start"]
