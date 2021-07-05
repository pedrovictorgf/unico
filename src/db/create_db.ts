import knex from 'knex';
import config from '../knexfile'


const conn = process.env['NODE_ENV'] === 'production' ? 
knex({
	client: "pg",
	connection: `${process.env['DATABASE_URL']}`
}):
knex({
	client: "pg",
    connection: {
		host:'db',
		user:'postgres',
		password:'postgres',
		database:'postgres'
	}
})

let dbsWeShouldHave = ['unico'];

(async () => {
	let dbs = await conn('pg_database').select('datname');

	dbs = dbs.map(item => item.datname);

	dbsWeShouldHave = dbsWeShouldHave.filter(item => {
		return !dbs.includes(item)
	});

	for (const db of dbsWeShouldHave) {
		await conn.raw(`create database ${db}`)
	}

	conn.destroy();
})();