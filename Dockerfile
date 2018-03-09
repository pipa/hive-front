# pipa/centos-nginx-nodejs dockerfile
# centos, nginx, nodejs, pm2
# @date 03/2018
FROM centos:7.4.1708

# set environment variables
ENV WEBROOT /webroot/default
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 9.7.1
ENV NVM_VERSION 0.33.8
ENV PORT 9999
ENV NODE_ENV production

# install nginx
RUN yum update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nginx; yum clean all

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

# install nodejs
RUN curl --silent --location https://rpm.nodesource.com/setup_9.x | bash -
RUN yum -y install nodejs; yum clean all
RUN yum install gcc-c++ openssl-devel make; yum clean all

# add our package.json and install *before* adding our application files
WORKDIR /tmp
COPY package.json /tmp/
RUN npm install

# set the work directory
WORKDIR ${WEBROOT}
RUN cp -a /tmp/node_modules ${WEBROOT}

# add application files
ADD . ./

# expose the port
EXPOSE ${PORT}

# run the pm2 start command with configuration file.
# CMD ["pm2-runtime", "--json", "pm2.config.js", "--only", "front"]
# ç'est fini!
