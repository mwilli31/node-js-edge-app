FROM resin/rpi-raspbian

# install required packages
RUN apt-get update
RUN apt-get install -y wget dialog

# install nodejs
RUN wget http://node-arm.herokuapp.com/node_latest_armhf.deb
RUN dpkg -i node_latest_armhf.deb

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8675
CMD [ "npm", "start" ]
