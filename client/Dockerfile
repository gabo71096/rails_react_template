FROM node:18.17.0 as builder
WORKDIR /client
COPY . .
RUN npm i
RUN chown -R node:node .
USER node
EXPOSE 5173
CMD ["npm", "run", "host"]
