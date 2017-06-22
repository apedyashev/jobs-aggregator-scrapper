FROM node:8.1.2-alpine

RUN mkdir /src
ADD ./ /src
WORKDIR /src
RUN npm install
RUN npm install -g nodemon
CMD npm start

#RUN mkdir /src
#RUN npm install nodemon -g
#WORKDIR /src
#ADD ./package.json /src/package.json
#RUN npm install

#ADD ./nodemon.json /src/nodemon.json
#CMD npm start
