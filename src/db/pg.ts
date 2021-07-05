import knex from 'knex'
import config from '../knexfile';

let pg;

if(process.env['NODE_ENV'] === 'production') {
	pg = knex(config.heroku)
} else {
	pg = knex(config.development)
}

export default pg;