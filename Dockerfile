FROM node:10
COPY . /home/next_app
WORKDIR /home/next_app
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
