# Node version
FROM node:18-slim

# Use default node user
USER node

# Set workdir
WORKDIR /client

# Copy package.json and install deps
COPY --chown=node:node package*.json .
RUN npm i

# Copy app and chown files
COPY --chown=node:node . .

# Expose port
EXPOSE 5173

# Startup command
CMD ["npm", "run", "host"]
