#!/bin/sh

node /app > /dev/null 2> /dev/null &

echo 4

nginx -g "daemon off;"