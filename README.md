### base compose run

```
$ docker compose -f docker-compose.base.yml run --rm base
$ docker compose -f docker-compose.base.yml run --rm installer
```

### dev compose up

```
$ docker compose -f docker-compose.dev.yml build --no-cache
$ docker compose -f docker-compose.dev.yml up -d
```

```
$ docker exec -it next-app sh
# npm i
```

```

docker build -t web-service -f apps/web/Dockerfile .
docker run --rm --publish 3000:3000 -e HOSTNAME=localhost web-service
```
