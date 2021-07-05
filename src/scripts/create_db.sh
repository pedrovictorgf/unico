#!/bin/bash

set -eo pipefail

npx ts-node src/db/create_db.ts

npx knex migrate:down --knexfile src/knexfile.ts

npx knex migrate:latest --knexfile src/knexfile.ts