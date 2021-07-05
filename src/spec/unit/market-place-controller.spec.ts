import MarketPlaceController from '../../controllers/market-place-controller';
import IMarketPlaceService from '../../interfaces/services/market-place-service-interface';
import MarketPlaceServiceStub from '../stubs/market-place-service-stub';
import RequestStub from '../stubs/request.stub';
import ResponseStub from '../stubs/response.stub';
import { Request, Response } from 'express';

describe("MarketPlaceController", () => {
	let marketPlaceController: MarketPlaceController
	let marketPlaceService: IMarketPlaceService
	let requestStub: Request
	let responseStub: Response

	beforeAll(() => {
		marketPlaceService = new MarketPlaceServiceStub();
		marketPlaceController = new MarketPlaceController(marketPlaceService);
		requestStub = (new RequestStub() as unknown) as Request
		responseStub = (new ResponseStub() as unknown) as Response
	});


	it('should call getAll from service', async () => {
		const getAllSpy = jest.spyOn(marketPlaceService, 'getAll');

		await marketPlaceController.getAllMarketPlaces(requestStub, responseStub, () => {});

		expect(getAllSpy).toBeCalled();
	});

	it('should call getMarketPlaceById from service', async () => {
		const getMarketPlaceByIdSpy = jest.spyOn(marketPlaceService, 'getMarketPlaceById');

		await marketPlaceController.getMarketPlaceById(requestStub, responseStub, () => {});

		expect(getMarketPlaceByIdSpy).toBeCalled();
	});

	it('should call deleteMarketPlaceByRegisterCode from service', async () => {
		const deleteMarketPlaceByRegisterCodeSpy = jest.spyOn(marketPlaceService, 'deleteMarketPlaceByRegisterCode');

		await marketPlaceController.deleteMarketPlaceByRegisterCode(requestStub, responseStub, () => {});

		expect(deleteMarketPlaceByRegisterCodeSpy).toBeCalled();
	});

	it('should call updateMarketPlace from service', async () => {
		const updateMarketPlaceSpy = jest.spyOn(marketPlaceService, 'updateMarketPlace');

		await marketPlaceController.updateMarketPlace(requestStub, responseStub, () => {});

		expect(updateMarketPlaceSpy).toBeCalled();
	});
});