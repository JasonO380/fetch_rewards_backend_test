FROM node:16
WORKDIR /home/fetch/app
COPY . /home/fetch/app
RUN npm install
CMD ["npm", "start"]
EXPOSE 5000