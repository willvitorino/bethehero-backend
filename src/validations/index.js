const { celebrate, Joi, Segments } = require('celebrate')

const CreateOngValidator = celebrate({
	[ Segments.BODY ]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required(),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2)
	})
})

const ProfileValidator = celebrate({
	[ Segments.HEADERS ]: Joi.object({
		authorization: Joi.string().required(),
	}).unknown()
})

const DeleteIncidentValidator = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required()
	})
})

const ListIncidentsValidator = celebrate({
	[ Segments.QUERY ]: Joi.object().keys({
		page: Joi.number()
	})
})

const CreateIncidentsValidator = celebrate({
	[ Segments.HEADERS ]: Joi.object({
		authorization: Joi.string().required(),
	}).unknown(),
	[ Segments.BODY ]: Joi.object().keys({
		title: Joi.string().required(),
		description: Joi.string().required(),
		value: Joi.number().required()
	})
})

const CreateSessionValidator = celebrate({
	[ Segments.BODY ]: Joi.object().keys({
		id: Joi.string().required()
	})
})

module.exports = {
	CreateOngValidator,
	ProfileValidator,
	DeleteIncidentValidator,
	ListIncidentsValidator,
	CreateIncidentsValidator,
	CreateSessionValidator
}