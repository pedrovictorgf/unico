import IMarketPlaceRepository from '../../interfaces/repositories/market-place-repository-interface';
import MarketPlace from '../../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../../models/dto/update-market-place-dto';

export default class MarketPlaceServiceStub implements IMarketPlaceRepository {
	public async getAll(): Promise<MarketPlace[]> {
		return Promise.resolve([] as MarketPlace[]);
	}

	public async getById(): Promise<MarketPlace> {
		return Promise.resolve({} as MarketPlace);
	}
	
	public async deleteByRegisterCode(): Promise<void> {
		return Promise.resolve();
	}

	public async update(): Promise<void> {
		return Promise.resolve();
	}
}