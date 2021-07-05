import { Router, Request, Response, NextFunction } from 'express'
import Controller from './controller'
import MarketPlaceService from '../services/martket-place-service'

export default class MarketPlaceController extends Controller {

	marketPlaceService: MarketPlaceService
	
	constructor(marketPlaceService: MarketPlaceService) {
		super('/market-places', Router())
		this.marketPlaceService = marketPlaceService
	}

	protected initRoutes(): void {
		this.router.get('/', async (req: Request, res: Response) => this.getAllMarketPlaces(req, res));
		this.router.get('/:id', async(req: Request, res: Response) => this.getMarketPlaceById(req, res));
		this.router.delete('/:registerCode', async(req: Request, res: Response) => this.deleteMarketPlaceByRegisterCode(req, res));
		this.router.put('/:id', async(req: Request, res: Response) => this.updateMarketPlace(req, res));
	}

	public async getAllMarketPlaces(req: Request, res: Response): Promise<void> {
		let q = req.query['q'] !== undefined && typeof(req.query['q']) === 'string' ? req.query['q']:'';
		await this.marketPlaceService.getAll(q).then((result) => {
			res.status(200).json(result);
		})
	}

	public async getMarketPlaceById(req: Request, res: Response): Promise<void> {
		await this.marketPlaceService.getMarketPlaceById(req.params.id).then((result) => {
			res.status(200).json(result);
		})
	}

	public async deleteMarketPlaceByRegisterCode(req: Request, res: Response): Promise<void> {
		await this.marketPlaceService.deleteMarketPlaceByRegisterCode(req.params.registerCode).then(() => {
			res.status(204).send();
		})
	}

	public async updateMarketPlace(req: Request, res: Response): Promise<void> {
		await this.marketPlaceService.updateMarketPlace(req.params.id, req.body).then(() => {
			res.status(204).send();
		})
	}
}