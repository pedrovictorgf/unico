#!/bin/bash

set -eo pipefail

docker-compose build
docker-compose up
# docker-compose -f docker-compose.yml run --service-ports --rm web bash