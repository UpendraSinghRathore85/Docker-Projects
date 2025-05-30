```bash
# Initialize a new Node.js project
npm init -y

# Install express and body-parser with exact versions
npm install express body-parser --save-exact

# Start the application
npm start
```


docker build -t express-app-env-vars .
docker run -d -p 3000:3000 --name express-app express-app-env-vars
docker ps -a 