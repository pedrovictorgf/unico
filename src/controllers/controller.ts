import { Router } from 'express'

export default abstract class Controller {
	public path: string;
	public router: Router;

	constructor(path: string, router: Router) {
		this.path = path
		this.router = router
		this.initRoutes()
	}

	protected abstract initRoutes(): void
}