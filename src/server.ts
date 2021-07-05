import express, { Request, Response } from 'express';
import App from './app';
import MarketPlaceController from './controllers/market-place-controller';
import MarketPlaceService from './services/martket-place-service';
import MarketPlaceRepository from './repositories/market-place-repository';

const app = new App({
	port: 3000,
	controllers: [
		new MarketPlaceController(new MarketPlaceService(new MarketPlaceRepository()))
	]
});

app.listen()
