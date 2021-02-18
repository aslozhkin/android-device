#!/bin/bash

set -m

./wireless_autoconnect.sh

./entry_point.sh &

node ./restana.js

fg %1
