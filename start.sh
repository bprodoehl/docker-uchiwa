#!/bin/bash

mkdir -p /config

node /opt/config-filler/index.js /opt/config.json > /config/config.json

/go/bin/app -c /config/config.json
