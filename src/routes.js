const express = require('express')
const {
	CreateOngValidator,
	ProfileValidator,
	DeleteIncidentValidator,
	CreateIncidentsValidator,
	ListIncidentsValidator,
	CreateSessionValidator
} = require('./validations')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

/*
* Login
* */
routes.post('/v1/sessions', CreateSessionValidator, SessionController.create)

/*
* Ongs
* */
routes.post('/v1/ongs', CreateOngValidator, OngController.create)
routes.get('/v1/ongs', OngController.index)

/*
* Incidents
* */
routes.post('/v1/incidents', CreateIncidentsValidator, IncidentController.create)
routes.get('/v1/incidents', ListIncidentsValidator, IncidentController.index)
routes.delete('/v1/incidents/:id', DeleteIncidentValidator, IncidentController.remove)

routes.get('/v1/profile', ProfileValidator, ProfileController.index)

module.exports = routes
