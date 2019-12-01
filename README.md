# Xendit Test

Microservice architecture with node js and MongoDB.

## Project Setup with Docker

Install [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose/install/)

1 - Clone project from repository:

```bash
git clone https://github.com/muhammadbinnaeem/xendit.git
```

2 - Enter the xendit folder and rename env-example to .env.

```bash
cd xendit
cp env-example .env
```

3 - Run your containers:
```bash
docker-compose up -d 
```

if the above command failed with this:
```
ERROR: Couldn't connect to Docker daemon at http+docker://localhost - is it running?

If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.
```

Run with `sudo`

4 - Open postman or any other tool for testing API and visit [localhost:8080](http://localhost:8080).