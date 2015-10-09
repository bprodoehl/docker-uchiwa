# docker-uchiwa

### Configuration
Configuration works two ways: provide a config.json file at /config/config.json,
or use the following environment variables:

 * SENSU_NAME
 * SENSU_HOST
 * SENSU_API_PORT
 * SENSU_SSL - set to 1 or true to use SSL
 * SENSU_INSECURE - set to 1 or true to allow self-signed certs
 * AMQP_VHOST
 * SENSU_TIMEOUT
 * UCHIWA_USER
 * UCHIWA_PASSWORD
 * UCHIWA_PORT

### Getting Started
```
docker run -d --name uchiwa \
           --hostname uchiwa \
           -p 80:80 \
           --env SENSU_NAME="Main Server" \
           --env SENSU_HOST="sensu-server.mydomain.com" \
           --env SENSU_API_PORT=443 \
           --env SENSU_SSL=true \
           --env SENSU_INSECURE=true \
           --env AMQP_VHOST=\\sensu \
           --env SENSU_TIMEOUT=5 \
           --env UCHIWA_USER=myadminuser \
           --env UCHIWA_PASSWORD=mysecretpassword \
           --env UCHIWA_PORT=80
           bprodoehl/uchiwa
```
