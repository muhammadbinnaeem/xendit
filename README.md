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

## Project summary
On **docker-compose up -d**, four docker containers will be created:

**mongo**: For database \
**ms-auth**: For login and authenticating other services. It will work as API Gateway.\
**ms-comments**: For comments module.\
**ms-members**: For members module.

## Packages used
[Jest](https://www.npmjs.com/package/jest) and [supertest](https://www.npmjs.com/package/supertest) for testing.\
[winston](https://www.npmjs.com/package/winston), [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file) and [morgan](https://www.npmjs.com/package/morgan) for logging.\
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) and [passport](https://www.npmjs.com/package/passport) for authentication.\
[request-promise-native](https://www.npmjs.com/package/request-promise-native) for proxy request.\
[mongoose-seed](https://www.npmjs.com/package/mongoose-seed) for seeding.\
[mongoose-delete](https://www.npmjs.com/package/mongoose-delete) for soft delete.