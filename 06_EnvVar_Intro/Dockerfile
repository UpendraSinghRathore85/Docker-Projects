FROM node:22-alpine

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

ENV PORT=5000
ENV APP_NAME="my express app"

CMD [ "node", "src/index.js" ]