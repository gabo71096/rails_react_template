FROM node:18.17.0 as builder
WORKDIR /client
COPY . .
RUN npm i
RUN npm run build
RUN chown -R node:node .
USER node

FROM nginx:1.25.1
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /client/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
