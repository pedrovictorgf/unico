import IMarketPlaceService from '../../interfaces/services/market-place-service-interface';
import MarketPlace from '../../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../../models/dto/update-market-place-dto';

export default class MarketPlaceServiceStub implements IMarketPlaceService {
	public async getAll(q: string): Promise<MarketPlace[]> {
		return Promise.resolve([] as MarketPlace[]);
	}

	public async getMarketPlaceById(id: string): Promise<MarketPlace> {
		return Promise.resolve({} as MarketPlace);
	}
	
	public async deleteMarketPlaceByRegisterCode(registerCode: string): Promise<void> {
		return Promise.resolve();
	}

	public async updateMarketPlace(id: string, updateMarketPlaceDto: UpdateMarketPlaceDto): Promise<void> {
		return Promise.resolve();
	}
}
