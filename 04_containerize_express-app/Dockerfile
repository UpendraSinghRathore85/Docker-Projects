FROM node:22
WORKDIR /app

#copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# and Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY src/index.js index.js

# run the application
EXPOSE 3000
CMD ["node", "index.js"]