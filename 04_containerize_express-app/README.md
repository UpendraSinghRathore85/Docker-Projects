# Docker Projects

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

