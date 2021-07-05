import MarketPlace from '../../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../../models/dto/update-market-place-dto';

export default interface IMarketPlaceService {
	getAll(q: string): Promise<MarketPlace[]>;

	getMarketPlaceById(id: string): Promise<MarketPlace>;

	deleteMarketPlaceByRegisterCode(registerCode: string): Promise<void>;

	updateMarketPlace(id: string, updateMarketPlaceDto: UpdateMarketPlaceDto): Promise<void>;
}