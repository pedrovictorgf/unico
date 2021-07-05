import MarketPlace from '../models/domain/market-place-domain';
import UpdateMarketPlaceDto from '../models/dto/update-market-place-dto';

import pg from '../db/pg';

export default class MarketPlaceRepository {
	public async getAll(q: string): Promise<MarketPlace[]> {
		const markets: MarketPlace[] = await pg('market-places')
			.where({distrito: q})
			.orWhere({regiao5: q})
			.orWhere({nome_feira: q})
			.orWhere({bairro: q});

		return markets;
	}

	public async getById(id: string): Promise<MarketPlace> {
		const market: MarketPlace[] = await pg('market-places').where({id});

		return market[0];
	}

	public async deleteByRegisterCode(registerCode: string): Promise<void> {
		const result = await pg('market-places').where({registro: registerCode}).del();
	}

	public async update(id: string, updateMarketPlaceDto: UpdateMarketPlaceDto): Promise<void> {
		const result = await pg('market-places').where({id}).update(updateMarketPlaceDto);
	}
}