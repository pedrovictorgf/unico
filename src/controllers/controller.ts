import { Router } from 'express'
import bodyparser from 'body-parser';

export default abstract class Controller {
	public path: string;
	public router: Router;

	constructor(path: string, router: Router) {
		this.path = path
		this.router = router
		this.setupBodyParsers();
		this.initRoutes()
	}

	private setupBodyParsers(): void {
		this.router.use(bodyparser.json());
	}
	
	protected abstract initRoutes(): void
}