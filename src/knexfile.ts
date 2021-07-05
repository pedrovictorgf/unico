// Update with your config settings.

export default {
  development: {
    client: "pg",
    connection: {
		host:'db',
		user:'postgres',
		password:'postgres',
		database:'unico'
	}
  },
  production: {
  	client: "pg",
  	connection: {
  		host: process.env['DB_HOST'],
  		user: process.env['DB_USER'],
  		password: process.env['DB_PWD'],
  		database: process.env['DB_NAME']
  	}
  }
};
