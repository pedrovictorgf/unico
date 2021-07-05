import MarketPlace from '../../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../../models/dto/update-market-place-dto';

export default interface IMarketPlaceRepository {
	getAll(q: string): Promise<MarketPlace[]>;

	getById(id: string): Promise<MarketPlace>;
	
	deleteByRegisterCode(registerCode: string): Promise<void>;

	update(id: string, updateMarketPlaceDto: UpdateMarketPlaceDto): Promise<void>;
}