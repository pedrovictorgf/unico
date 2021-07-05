import knex from 'knex';
import config from '../knexfile'


const conn = process.env['ON_HEROKU'] !== 'TRUE' ? 
knex({
	client: "pg",
    connection: {
		host:'db',
		user:'postgres',
		password:'postgres',
		database:'postgres'
	}
}) :
knex({
	client: "pg",
	connection: `${process.env['DATABASE_URL']}`
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