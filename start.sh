#!/usr/bin/bash
sudo pm2 start node_modules/node-red/red.js -- --settings ./settings/settings.js --userDir ./settings
