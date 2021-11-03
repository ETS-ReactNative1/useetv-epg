FROM node:14.18.1-alpine3.14
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

# start app
CMD ["npm", "start"]
