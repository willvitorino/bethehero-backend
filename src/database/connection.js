const knex = require('knex');

const config = require('../../knexfile');

const connection = knex(config[process.env.ENVIROMENT || 'production' ]);

module.exports = connection;
