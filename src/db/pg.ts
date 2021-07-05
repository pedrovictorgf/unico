import knex from 'knex'
import config from '../knexfile';

const pg = knex(config.development)

export default pg;