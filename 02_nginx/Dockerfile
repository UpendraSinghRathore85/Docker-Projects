# this dockerfile is used to build a docker image for nginx
# and manually changes the content of the index.html file
# run docker exec -it <container_id> /bin/bash
# cat /usr/share/nginx/html/index.html
# to see the content of the index.html file
# and to see the changes made in the Dockerfile



FROM nginx:1.27.0

RUN apt-get update 
RUN apt-get install -y vim
RUN apt-get install -y curl

