This is the front readme

To directly run this container use the following:
```bash
docker build -t front .
docker run -v ~/Sites/hive/front:/webroot/default -p 9999:9999 front
```
