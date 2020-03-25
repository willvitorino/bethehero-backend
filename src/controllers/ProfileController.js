const connection = require('../database/connection');
const { NotAllowedDefault } = require('../errors');

async function index (req, res) {
	const ong_id = req.headers.authorization;

	connection('incidents')
		.where('ong_id', ong_id)
		.select('*')
		.then(
			incidents => {
				return res.json(incidents);
			}
		).catch(
			() => {
				NotAllowedDefault(res);
			}
	);
}

module.exports = {
	index
};
