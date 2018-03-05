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

# install pm2 *globally* so we can run our application
RUN npm i -g pm2

# set the work directory
RUN mkdir -p ${WEBROOT}
WORKDIR ${WEBROOT}

# add our package.json and install *before* adding our application files
ADD package.json ./
RUN npm i --production

# add application files
ADD . ./

# expose the port
EXPOSE ${PORT}

# run the pm2 start command with configuration file.
CMD ["pm2-runtime", "--json", "pm2.config.js", "--only", "front"]
# ç'est fini!
