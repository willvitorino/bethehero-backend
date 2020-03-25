const connection = require('../database/connection');
const crypto = require('crypto');
const { NotAllowedDefault } = require('../errors');

async function index (req, res) {
	connection('ongs').select('*').then(
		ongs => {
			return res.json(ongs);
		}
	).catch(
		() => {
			return NotAllowedDefault(res);
		}
	);
}

async function create(req, res) {

	const { name, email, whatsapp, city, uf } = req.body;

	const id = crypto.randomBytes(4).toString('HEX');

	connection('ongs').insert({ id, name, email, whatsapp, city, uf }).then(
		() => {
			return res.json({ id });
		}
	).catch(
		() => {
			return
		}
	);
}

module.exports = {
	create, index
};
