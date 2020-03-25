const connection = require('../database/connection');

async function create (req, res) {

	const { id } = req.body;

	connection('ongs').where('id', id).select('name').first().then(
		ong => {
			return res.json(ong);
		}
	).catch(
		err => {
			return res.status(400).json({ err });
		}
	);
}

module.exports = {
	create
};
