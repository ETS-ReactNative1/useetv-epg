FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

# start app
CMD ["npm", "start", "--openssl-legacy-provider start"]
