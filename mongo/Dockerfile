FROM mongo:latest

COPY mysetup.sh /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD [ "mongod"]