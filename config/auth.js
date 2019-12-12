module.exports = {
	jwt: {
		tokens:{
			access:{
				type: 'access',
				expiresIn: '1min',
			},
			refresh: {
				type: 'refresh',
				expiresIn: '24h',
			},
		}
	}
}