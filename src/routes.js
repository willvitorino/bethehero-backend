const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

/*
* Ongs
* */
routes.post('/v1/ongs', OngController.create);
routes.get('/v1/ongs', OngController.index);

/*
* Incidents
* */
routes.post('/v1/incidents', IncidentController.create);
routes.get('/v1/incidents', IncidentController.index);
routes.delete('/v1/incidents/:id', IncidentController.remove);

routes.get('/v1/profile', ProfileController.index);

module.exports = routes;
