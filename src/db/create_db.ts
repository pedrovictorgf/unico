import knex from 'knex';
import config from '../knexfile'


const conn = process.env['NODE_ENV'] === 'production' ? 
knex({
	client: "pg",
	connection: {
		host:'ec2-3-224-7-166.compute-1.amazonaws.com',
		user:'ejkhwpdyxyxoym',
		password:'83198170fac71cac70a022c4e83ee7c5d5acabec39dd38df9bcace21f87f7d84',
		database:'dc058oog11cse2'
	}
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