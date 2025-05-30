# Docker Projects

<!--
    Documentation: Running index.js Inside a Docker Container

    Overview:
    This documentation explains how the `index.js` file of an Express application is executed within a Docker container. It outlines the typical workflow, including Dockerfile setup, image building, and container execution.

    Steps:

    1. Dockerfile Setup:
        - A Dockerfile is created to define the environment for the Express app.
        - It specifies a Node.js base image.
        - Application files, including `index.js`, are copied into the image.
        - Dependencies are installed using `npm install`.
        - The default command is set to run `node index.js`.

    2. Building the Image:
        - The Docker image is built using the Dockerfile.
        - This results in a portable image containing the app and its environment.

    3. Running the Container:
        - The container is started from the built image.
        - `node index.js` is executed inside the container.
        - Port 3000 is mapped from the container to the host for external access.

    4. Inside the Container:
        - An isolated Node.js environment runs the application.
        - `index.js` starts the Express server and listens for HTTP requests.

    Summary:
    The Dockerfile ensures that all dependencies are installed and the Express app (`index.js`) starts automatically when the container launches. This approach guarantees portability and consistency across different environments.
-->


## Commands

```bash
npm init -y
npm install express@4.19.2 body-parser@1.20.2 --save-exact
npm start    # to start the server
```

## Docker Commands

```bash
docker build -t express-app-image:v0.0.1 .
docker run -d -p 3000:3000 --name express-app express-app-image:v0.0.1
# run the image and access the app at http://localhost:3000/

docker start express-app
docker stop express-app
## Notes

- **Data Persistence:**  
    Any data stored inside the container will be lost when you stop and start the container unless you use [Docker volumes](https://docs.docker.com/storage/volumes/) to persist data.

- **Pausing Containers:**  
    The `docker pause` and `docker unpause` commands can be used to temporarily suspend and resume all processes in a container without stopping it.

docker pause express-app
docker unpause express-app
``` Docker projects

