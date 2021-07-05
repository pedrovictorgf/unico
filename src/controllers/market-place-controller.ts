import { Router, Request, Response, NextFunction } from 'express'
import Controller from './controller'
import IMarketPlaceService from '../interfaces/services/market-place-service-interface';

export default class MarketPlaceController extends Controller {

	marketPlaceService: IMarketPlaceService
	
	constructor(marketPlaceService: IMarketPlaceService) {
		super('/market-places', Router())
		this.marketPlaceService = marketPlaceService
	}

	protected initRoutes(): void {
		this.router.get('/', async (req: Request, res: Response, next: NextFunction) => this.getAllMarketPlaces(req, res, next));
		this.router.get('/:id', async(req: Request, res: Response, next: NextFunction) => this.getMarketPlaceById(req, res, next));
		this.router.delete('/:registerCode', async(req: Request, res: Response, next: NextFunction) => this.deleteMarketPlaceByRegisterCode(req, res, next));
		this.router.put('/:id', async(req: Request, res: Response, next: NextFunction) => this.updateMarketPlace(req, res, next));
	}

	public async getAllMarketPlaces(req: Request, res: Response, next: NextFunction): Promise<void> {
		let q = req.query['q'] !== undefined && typeof(req.query['q']) === 'string' ? req.query['q']:'';
		await this.marketPlaceService.getAll(q).then((result) => {
			res.status(200).json(result);
		});
	}

	public async getMarketPlaceById(req: Request, res: Response, next: NextFunction): Promise<void> {
		await this.marketPlaceService.getMarketPlaceById(req.params.id).then((result) => {
			res.status(200).json(result);
		}).catch(e => {
			next(e);
		});
	}

	public async deleteMarketPlaceByRegisterCode(req: Request, res: Response, next: NextFunction): Promise<void> {
		await this.marketPlaceService.deleteMarketPlaceByRegisterCode(req.params.registerCode).then(() => {
			res.status(204).send();
		}).catch(e => {
			next(e);
		});
	}

	public async updateMarketPlace(req: Request, res: Response, next: NextFunction): Promise<void> {
		await this.marketPlaceService.updateMarketPlace(req.params.id, req.body).then(() => {
			res.status(204).send();
		}).catch(e => {
			next(e)
		});
	}
}