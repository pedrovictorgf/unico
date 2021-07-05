import { Knex } from "knex";
import fs from 'fs';


export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("market-places").del();

    const data = fs.readFileSync(`${__dirname}/files/DEINFO_AB_FEIRASLIVRES_2014.csv`, { encoding: 'utf-8'}).split('\n')

    for(let marketPlace of data) {
    	let marketPlaceData = marketPlace.split(',')

    	await knex("market-places").insert({
    		id: marketPlaceData[0],
    		long: marketPlaceData[1],
    		lat: marketPlaceData[2],
    		setcens: marketPlaceData[3],
    		areap: marketPlaceData[4],
    		coddist: marketPlaceData[5],
    		distrito: marketPlaceData[6],
    		codsubpref: marketPlaceData[7],
    		subprefe: marketPlaceData[8],
    		regiao5: marketPlaceData[9],
    		regiao8: marketPlaceData[10],
    		nome_feira: marketPlaceData[11],
    		registro: marketPlaceData[12],
    		logradouro: marketPlaceData[13],
    		numero: marketPlaceData[14],
    		bairro: marketPlaceData[15],
    		referencia: marketPlaceData[16]
    	});
    }
};
