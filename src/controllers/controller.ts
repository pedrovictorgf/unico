import { Router, Request, Response, NextFunction } from 'express'
import bodyparser from 'body-parser';
import Exception from '../models/dto/exception';

export default abstract class Controller {
	public path: string;
	public router: Router;

	constructor(path: string, router: Router) {
		this.path = path
		this.router = router
		this.setupBodyParsers();
		this.initRoutes()
		this.setupErrorMidleware();
	}

	private setupBodyParsers(): void {
		this.router.use(bodyparser.json());
	}

	private setupErrorMidleware() {
		this.router.use((e: Error, _: Request, res: Response, __: NextFunction) => {
			if(e instanceof Exception) {
				res.status(e.status).json(e);
			} else {
				res.status(500).json(new Exception(500, "Internal Server Error"))
			}
		});
	}

	protected abstract initRoutes(): void
}