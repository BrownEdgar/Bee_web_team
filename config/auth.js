module.exports = {
	jwt: {
		tokens:{
			access:{
				type: 'access',
				expiresIn: '15min',
			},
			refresh: {
				type: 'refresh',
				expiresIn: '24h',
			},
		}
	}
}