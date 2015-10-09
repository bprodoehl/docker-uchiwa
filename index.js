

if (process.argv.length < 3)  {
  console.log("usage: node config-filler.js <config file>");
  process.exit(1);
}

var configFile = process.argv[2];

var configJSON = require(configFile);

// Sensu configuration keys
if (typeof(process.env.SENSU_NAME) !== 'undefined') {
  configJSON.sensu[0].name = process.env.SENSU_NAME;
}
if (typeof(process.env.SENSU_HOST) !== 'undefined') {
  configJSON.sensu[0].host = process.env.SENSU_HOST;
}
if (typeof(process.env.SENSU_API_PORT) !== 'undefined') {
  configJSON.sensu[0].port = process.env.SENSU_API_PORT;
}
if (typeof(process.env.SENSU_SSL) !== 'undefined' &&
    (process.env.SENSU_SSL == '1' ||
     process.env.SENSU_SSL.toLowerCase() == "true")) {
  configJSON.sensu[0].ssl = true;

  // only deal with "insecure" field if also using TLS
  if (typeof(process.env.SENSU_INSECURE) !== 'undefined' &&
      (process.env.SENSU_INSECURE == '1' ||
       process.env.SENSU_INSECURE.toLowerCase() == "true")) {
    configJSON.sensu[0].insecure = true;
  }
}
if (typeof(process.env.AMQP_VHOST) !== 'undefined') {
  configJSON.sensu[0].path = process.env.AMQP_VHOST;
}
if (typeof(process.env.SENSU_TIMEOUT) !== 'undefined') {
  configJSON.sensu[0].timeout = process.env.SENSU_TIMEOUT;
}

// Uchiwa configuration keys
if (typeof(process.env.UCHIWA_USER) !== 'undefined') {
  configJSON.uchiwa.user = process.env.UCHIWA_USER;
}
if (typeof(process.env.UCHIWA_PASSWORD) !== 'undefined') {
  configJSON.uchiwa.pass = process.env.UCHIWA_PASSWORD;
}
if (typeof(process.env.UCHIWA_PORT) !== 'undefined') {
  configJSON.uchiwa.port = process.env.UCHIWA_PORT;
}

console.log(JSON.stringify(configJSON, null, 2));
