# pipa/centos-nginx-nodejs dockerfile
# centos, nginx, nodejs, pm2
# @date 03/2018
FROM centos:7.4.1708

MAINTAINER Luis Matute

# set environment variables
ENV WEBROOT /webroot/default
ENV PORT 9999
# ENV NODE_ENV production

# install nginx
RUN yum update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nginx; yum clean all

# Install GIT
RUN yum -y install git

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

# install nodejs
RUN curl --silent --location https://rpm.nodesource.com/setup_9.x | bash -
RUN yum -y install nodejs; yum clean all
RUN yum install gcc-c++ openssl-devel make; yum clean all

# add our package.json and install *before* adding our application files
WORKDIR ${WEBROOT}
COPY package.json ${WEBROOT}
RUN npm install

# add application files
ADD . ./

# expose the port
EXPOSE ${PORT}

# RUN npm start

# ç'est fini!
