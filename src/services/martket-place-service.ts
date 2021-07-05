import MarketPlaceRepository from '../repositories/market-place-repository';
import MarketPlace from '../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../models/dto/update-market-place-dto';

export default class MarketPlaceService {

	marketPlaceRepository: MarketPlaceRepository;

	constructor(marketPlaceRepository: MarketPlaceRepository) {
		this.marketPlaceRepository = marketPlaceRepository
	}

	public async getAll(q: string): Promise<MarketPlace[]> {
		return this.marketPlaceRepository.getAll(q)
	}

	public async getMarketPlaceById(id: string): Promise<MarketPlace> {
		return this.marketPlaceRepository.getById(id);
	}

	public async deleteMarketPlaceByRegisterCode(registerCode: string): Promise<void> {
		return this.marketPlaceRepository.deleteByRegisterCode(registerCode);
	}

	public async updateMarketPlace(id: string, updateMarketPlaceDto: UpdateMarketPlaceDto): Promise<void> {
		return this.marketPlaceRepository.update(id, updateMarketPlaceDto);
	}
}