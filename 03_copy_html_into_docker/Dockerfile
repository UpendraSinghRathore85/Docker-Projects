# Create your own index.html file in the Docker file's context directory.
# Use the Docker file to copy this file into the appropriate directory inside the Docker image.
# Change the ownership of the index.html file to the correct user and group (nginx:nginx).
# Build the Docker image with your changes.
# Run a container from your newly created image.

FROM nginx:1.27.0

RUN apt-get update 
RUN apt-get install -y vim
RUN apt-get install -y curl

COPY index.html /usr/share/nginx/html/index.html
RUN chown nginx:nginx /usr/share/nginx/html/index.html

