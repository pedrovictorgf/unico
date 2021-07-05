import knex from 'knex'
import configMap from '../knexfile';

let config;


if(process.env['NODE_ENV'] === 'production') {
	config = configMap.heroku
} else {
	config = configMap.development
}

const pg  = knex(config)

export default pg;