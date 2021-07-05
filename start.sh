#!/bin/bash

set -eo pipefail

docker-compose build
docker-compose up