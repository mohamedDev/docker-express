FROM  debian:10

MAINTAINER BOUAZIZ Mohamed <mohamed_bouaziz@hotmail.fr>

# create arg variable
ARG NODE_VERSION
ARG HTTP_PORT
ARG HTTPS_PORT

# create app env variable
ENV NVM_DIR=/usr/local/nvm

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
  && apt-get install -y curl \
  && apt-get install -y wget \
  && apt-get -y autoclean

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# nodemon server Il surveillera les modifications de vos fichiers
RUN npm install -g nodemon
# express
RUN npm install express

# set working directory
WORKDIR /app

# install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install

# ADD entrypoint.sh /entrypoint.sh
# RUN chmod u+x /entrypoint.sh

EXPOSE $HTTP_PORT $HTTPS_PORT
# ENTRYPOINT ["/entrypoint.sh"]
