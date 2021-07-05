import express, { Request, Response } from 'express';
import axios from 'axios'
import App from './app'
import MarketPlaceController from './controllers/market-place-controller'

const app = new App({
	port: 3000,
	controllers: [
		new MarketPlaceController()
	]
});

app.listen()
