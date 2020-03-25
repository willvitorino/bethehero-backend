module.exports = {
	NotAllowedDefault: function (res) {
		return res.status(401).json({ error: 'Operação não permitida.' })
	}
};
