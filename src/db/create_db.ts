import knex from 'knex';
import config from '../knexfile'

if(process.env['NODE_ENV'] !== 'production') {
	const conn = knex({
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
}
