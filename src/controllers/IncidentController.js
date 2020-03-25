const connection = require('../database/connection');
const { NotAllowedDefault } = require('../errors');

async function index (req, res) {
	const { page = 0, pageSize = 5 } = req.query;

	connection('incidents').count('*').then(
		([count]) => {
			res.header('X-Total-Count', count["count(*)"]);
			connection('incidents')
				.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
				.limit(pageSize).offset(page*pageSize)
				.select([ 'incidents.*', 'ongs.name', 'ongs.whatsapp', 'ongs.city', 'ongs.uf' ])
				.then(
				items => {
					return res.json( items );
				}
			).catch(
				() => {
					NotAllowedDefault(res);
				}
			)
		}
	);
}

async function create(req, res) {
	const { title, description, value } = req.body;

	const ong_id = req.headers.authorization;

	connection('incidents').insert({ title, description, value, ong_id }).then(
		([id]) => {
			return res.json({ id })
		}
	).catch(
		() => {
			NotAllowedDefault(res);
		}
	);
}

async function remove(req, res) {
	const { id } = req.params;
	const ong_id = req.headers.authorization;

	// const incident = await ;

	connection('incidents').where('id', id).select('ong_id').first().then(
		incident => {
			if ( incident.ong_id !== ong_id ) {
				return res.status(401).json({ error: 'Operação não permitida.' })
			} else {
				connection('incidents').delete(incident).then(
					() => {
						return res.status(204).send();
					}
				).catch(
					() => {
						NotAllowedDefault(res);
					}
				)
			}
		}
	).catch(
		() => {
			NotAllowedDefault(res);
		}
	);
}

module.exports = {
	create,
	index,
	remove
};
