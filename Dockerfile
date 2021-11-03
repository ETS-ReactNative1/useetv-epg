FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --openssl-legacy-provider
EXPOSE 3000

# start app
CMD ["npm", "start"]
