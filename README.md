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

## API Routes
1 - Login with credentials:

```bash
Request URL: http://localhost:8080/api/v1/auth/login
Request Method: POST
Request body: {
	"email":"mbinnaeem20@gmail.com",
	"password":"Abc123@@"
}
```
2 - Add comment:

```bash
Request URL: http://localhost:8080/api/v1/orgs/xendit/comments
Request Method: POST
Request header: {
	"Authorization":"Bearer ${token-return-in-login-request}"
}
Request body: {
	"comment":"This is a test comment"
}
```
3 - Get comments:

```bash
Request URL: http://localhost:8080/api/v1/orgs/xendit/comments
Request Method: GET
Request header: {
	"Authorization":"Bearer ${token-return-in-login-request}"
}
```
4 - Delete comments:

```bash
Request URL: http://localhost:8080/api/v1/orgs/xendit/comments
Request Method: DELETE
Request header: {
	"Authorization":"Bearer ${token-return-in-login-request}"
}
```
5 - Get members:

```bash
Request URL: http://localhost:8080/api/v1/orgs/xendit/members
Request Method: GET
Request header: {
	"Authorization":"Bearer ${token-return-in-login-request}"
}
```
NOTE: Xendit.postman_collection.json is also uploaded at root directory.