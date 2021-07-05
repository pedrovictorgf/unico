import Joi from 'joi';

export const updateMarketPlaceDtoValidator = Joi.object({
	long: Joi.string(),
	lat: Joi.string(),
	setcens: Joi.string(),
	areap: Joi.string(),
	coddist: Joi.number(),
	distrito: Joi.string(),
	codsubpref: Joi.number(),
	subprefe: Joi.string(),
	regiao5: Joi.string(),
	regiao8: Joi.string(),
	nome_feira: Joi.string(),
	logradouro: Joi.string(),
	numero: Joi.string(),
	bairro: Joi.string(),
	referencia: Joi.string(),
});