import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('market-places', table => {
		table.increments().primary().notNullable();
		table.string('long', 500).notNullable();
		table.string('lat', 500).notNullable();
		table.string('setcens', 500).notNullable();
		table.string('areap').notNullable();
		table.integer('coddist').notNullable();
		table.string('distrito', 500).notNullable();
		table.integer('codsubpref').notNullable();
		table.string('subprefe', 500).notNullable();
		table.string('regiao5', 500).notNullable();
		table.string('regiao8', 500).notNullable();
		table.string('nome_feira', 500).notNullable();
		table.string('registro', 500).notNullable();
		table.string('logradouro', 500).notNullable();
		table.string('numero', 500);
		table.string('bairro', 500).notNullable();
		table.string('referencia', 500);
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('market-places');
}

