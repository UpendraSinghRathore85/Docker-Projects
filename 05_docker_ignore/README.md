## Viewing Docker Image History and Layers

To inspect the history and layered architecture of a Docker image, use the following command:

```sh
docker history <image_name>
```
Replace `<image_name>` with your actual image name or ID.

To run a container interactively and remove it after exit, use:

```sh
docker run --rm -it hello-from-node-02 sh
```

## Using the `.dockerignore` File

The `.dockerignore` file specifies files and directories to exclude from the Docker build context. This reduces build context size, improves performance, and enhances security.

**Sample `.dockerignore` file:**
```
*.pyc
__pycache__/
node_modules/
.env
.git
**/*.test.js
```

> Place the `.dockerignore` file in the root of your build context (typically the same directory as your `Dockerfile`). Docker will ignore the specified files and directories during the build process.
