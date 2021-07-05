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
  heroku: {
  	client: "pg",
  	connection: `${process.env['DATABASE_URL']}`
  }
};
