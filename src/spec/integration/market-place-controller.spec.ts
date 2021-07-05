import supertest from 'supertest'
import App from '../../app';
import MarketPlaceController from '../../controllers/market-place-controller';
import MarketPlaceService from '../../services/martket-place-service';
import MarketPlaceRepository from '../../repositories/market-place-repository';
import pg from '../../db/pg';

describe('MarketPlaceController', () => {
	let app: App

	beforeAll(() => {
		app = new App({
			port: 3000,
			controllers: [
				new MarketPlaceController(new MarketPlaceService(new MarketPlaceRepository()))
			]
		})
	});

	it('should get all market places', async () => {
		const res = await supertest(app.app).get('/market-places').expect(200);

		expect(res.body.length).toBe(880);
	});

	it('should filter market places', async () => {
		const res = await supertest(app.app).get('/market-places?q=VL FORMOSA').expect(200);

		expect(res.body.length).toBe(5);
	});

	it('should get a market place by its id', async () => {
		const res = await supertest(app.app).get('/market-places/1').expect(200);

		expect(res.body).toEqual({
    		"id": 1,
    		"long": "-46550164",
    		"lat": "-23558733",
    		"setcens": "355030885000091",
    		"areap": "3550308005040",
    		"coddist": 87,
    		"distrito": "VILA FORMOSA",
    		"codsubpref": 26,
    		"subprefe": "ARICANDUVA-FORMOSA-CARRAO",
    		"regiao5": "Leste",
    		"regiao8": "Leste 1",
    		"nome_feira": "VILA FORMOSA",
    		"registro": "4041-0",
    		"logradouro": "RUA MARAGOJIPE",
    		"numero": "S/N",
    		"bairro": "VL FORMOSA",
    		"referencia": "TV RUA PRETORIA\r"
		});
	});

	it('should delete a market place for correct register code', async () => {
		const res = await supertest(app.app).delete('/market-places/4041-0').expect(204);
	});

	it('should update a market place information for correct id', async () => {
		const body = {
    		"referencia": "teste"
		}

		const res = await supertest(app.app).put('/market-places/2').send(body).expect(204);

		const dbData = await pg('market-places').where({id:2});

		expect(dbData.length).toBe(1);
		expect(dbData[0].referencia).toEqual('teste');
	});

	it('should throw error when getting market place by id for invalid id', async () => {
		await supertest(app.app).get('/market-places/1000').expect(404);
	});

	it('should throw error when deleting market place by register code for invalid input', async () => {
		await supertest(app.app).delete('/market-places/1000').expect(404);
	});

	it('should throw error when updating a non existent market place', async () => {
		const body = {
    		"referencia": "teste"
		}

		await supertest(app.app).put('/market-places/1000').send(body).expect(404);
	});

	it('should throw error when updating a market place for invalid input format', async () => {
		const body = {
    		"referencia": 1
		}

		await supertest(app.app).put('/market-places/2').send(body).expect(400);
	});	
});