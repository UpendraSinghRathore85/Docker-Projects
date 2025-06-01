```bash
# Node.js Project Setup and Docker Usage

## 1. Initialize and Install Dependencies

```bash
npm init -y
npm install express body-parser --save-exact
npm start
```

## 2. Build and Run Docker Container

```bash
# Build the Docker image
docker build -t express-app-env-vars .

# Run the container
docker run -d -p 3000:3000 --name express-app express-app-env-vars

# List all containers
docker ps -a
```

## 3. Using Environment Variables

- To set environment variables directly:

    ```bash
    docker run -d -p 3000:3000 --name express-app -e PORT=3000 -e NAME=myapp express-app-env-vars
    ```

- To use a `.env.prod` file for production-specific variables:

    ```bash
    docker run -d -p 3000:3000 --name express-app --env-file .env.prod express-app-env-vars
    ```

**Note:**  
The `.env.prod` file helps manage environment-specific or sensitive configuration outside your codebase. Using `--env-file` loads all variables from this file into the container.