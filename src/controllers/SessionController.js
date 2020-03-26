const connection = require('../database/connection');

async function create (req, res) {

	const { id } = req.body;

	connection('ongs').where('id', id).select('name').first().then(
		ong => {
			return !!ong ? res.json(ong) : res.status(400).json({ error: "ID inexistente." });
		}
	).catch(
		err => {
			return res.status(400).json({ error: "ID inexistente." });
		}
	);
}

module.exports = {
	create
};
