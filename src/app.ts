import express, { Application, Request, Response, NextFunction } from 'express'
import Controller from './controllers/controller'
import Exception from './models/dto/exception';

export default class App {
	public app: Application
	public port: number

	constructor(appInit: {port: number, controllers: Controller[]}) {
		this.app = express()
		this.port = appInit.port
		this.routes(appInit.controllers)
		this.setupErrorMidleware()
	}

	private routes(controllers: Controller[]): void {
		for(let controller of controllers) {
			this.app.use(controller.path, controller.router);
		}
	}

	private setupErrorMidleware() {
		this.app.use((e: Error, _: Request, res: Response, __: NextFunction) => {
			if(e instanceof Exception) {
				res.status(e.status).json(e);
			} else {
				res.status(500).json(new Exception(500, "Internal Server Error"))
			}
		});
	}

	public listen(): void {
		this.app.listen(process.env.PORT || this.port, () => {
			console.log("Market Place listening at http://localhost:3000")
		});
	}
}