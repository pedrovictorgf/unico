import { Router, Request, Response, NextFunction } from 'express'
import Controller from './controller'


export default class MarketPlaceController extends Controller {

	constructor() {
		super('/market-place', Router())
	}

	protected initRoutes(): void {
		this.router.get('/', async (req: Request, res: Response) => {
			res.status(200).send('Hello World')
		})
	}
}