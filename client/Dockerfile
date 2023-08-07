FROM node:18.17.0 as builder
WORKDIR /client
COPY package*.json .
RUN npm i
COPY . .
RUN chown -R node:node .
USER node
EXPOSE 5173
CMD ["npm", "run", "host"]
