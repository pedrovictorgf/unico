import { Router, Request, Response, NextFunction } from 'express'
import bodyparser from 'body-parser';
import Exception from '../models/dto/exception';
import logger from '../utils/logger';

export default abstract class Controller {
	public path: string;
	public router: Router;

	constructor(path: string, router: Router) {
		this.path = path
		this.router = router
		this.setupBodyParsers();
		this.setupLoggerMiddleware();
		this.initRoutes()
		this.setupErrorMidleware();
	}

	private setupLoggerMiddleware(): void {
		this.router.use((req,res,next) => {
			logger.info(req.method +': '+ req.originalUrl);
			next();
		});
	}

	private setupBodyParsers(): void {
		this.router.use(bodyparser.json());
	}

	private setupErrorMidleware() {
		this.router.use((e: Error, _: Request, res: Response, __: NextFunction) => {
			if(e instanceof Exception) {
				logger.error(e.status + ' ' + e.message);
				res.status(e.status).json(e);
			} else {
				logger.error('500 ' + e.message);
				res.status(500).json(new Exception(500, "Internal Server Error"))
			}
		});
	}

	protected abstract initRoutes(): void
}