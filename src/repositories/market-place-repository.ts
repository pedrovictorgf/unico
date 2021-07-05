import MarketPlace from '../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../models/dto/update-market-place-dto';
import Exception from '../models/dto/exception';
import pg from '../db/pg';
import IMarketPlaceRepository from '../interfaces/repositories/market-place-repository-interface';

export default class MarketPlaceRepository implements IMarketPlaceRepository {
	public async getAll(q: string): Promise<MarketPlace[]> {
		const markets: MarketPlace[] = await pg('market-places')
			.where('market-places.distrito', 'ilike' , `%${q}%`)
			.orWhere('market-places.regiao5', 'ilike' , `%${q}%`)
			.orWhere('market-places.nome_feira', 'ilike' , `%${q}%`)
			.orWhere('market-places.bairro', 'ilike' , `%${q}%`);

		return markets;
	}

	public async getById(id: string): Promise<MarketPlace> {
		const market: MarketPlace[] = await pg('market-places').where({id});

		if(market.length > 0)
			return market[0];
		throw new Exception(404, 'Market not found');
	}

	public async deleteByRegisterCode(registerCode: string): Promise<void> {
		const result = await pg('market-places').where({registro: registerCode}).del();

		if(result == 0)
			throw new Exception(404, 'No market place with this register code')
	}

	public async update(id: string, updateMarketPlaceDto: UpdateMarketPlaceDto): Promise<void> {
		const result = await pg('market-places').where({id}).update(updateMarketPlaceDto);
		
		if(result == 0)
			throw new Exception(404, 'No market place with this id')
	}
}