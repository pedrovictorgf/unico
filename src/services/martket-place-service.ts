import IMarketPlaceRepository from '../interfaces/repositories/market-place-repository-interface';
import MarketPlace from '../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../models/dto/update-market-place-dto';
import { updateMarketPlaceDtoValidator } from '../validators/update-market-place-dto-validator';
import Exception from '../models/dto/exception';
import IMarketPlaceService from '../interfaces/services/market-place-service-interface';

export default class MarketPlaceService implements IMarketPlaceService {

	marketPlaceRepository: IMarketPlaceRepository;

	constructor(marketPlaceRepository: IMarketPlaceRepository) {
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
		const { error } = updateMarketPlaceDtoValidator.validate(updateMarketPlaceDto);

		if(!error) {
			return this.marketPlaceRepository.update(id, updateMarketPlaceDto);
		} else {
			throw new Exception(400, error.message);
		}
	}
}