#!/bin/bash

if [ ! -e /config/config.json ]; then
  cp /opt/config.json.template /config/config.json
fi

node /opt/config-filler/index.js /config/config.json > /config/config.json

/go/bin/app -c /config/config.json
