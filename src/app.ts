import express, { Application, Request, Response } from 'express'
import Controller from './controllers/controller'

export default class App {
	public app: Application
	public port: number

	constructor(appInit: {port: number, controllers: Controller[]}) {
		this.app = express()
		this.port = appInit.port
		this.routes(appInit.controllers)
	}

	private routes(controllers: Controller[]): void {
		for(let controller of controllers) {
			this.app.use(controller.path, controller.router)
		}
	}

	public listen(): void {
		this.app.listen(process.env.PORT || this.port, () => {
			console.log("Market Place listening at http://localhost:3000")
		})
	}
}