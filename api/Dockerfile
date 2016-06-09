FROM node:6.2.0

RUN npm install -g typescript typings lite-server nodemon

RUN mkdir /src

WORKDIR /src

COPY package.json /src/package.json

RUN npm install

COPY typings.json /src/typings.json
COPY tsconfig.json /src/tsconfig.json
COPY nodemon.json /src/nodemon.json

COPY custom_typings /src/custom_typings

RUN typings install

COPY app /src/app

RUN npm run build

CMD npm run server

EXPOSE 3000
