This is the front readme

To directly run this container use the following:
```bash
docker build -t front .

# For development
$ docker run --name my-front -p 9999:9999 -e NODE_ENV=dev front

# For deployment
$ docker run --name my-front -p 9999:9999 front

# To view the application, you need to know the ip address of your virtual machine
$ docker-machine ip default
```
