module.exports = {
	jwt: {
		tokens:{
			access:{
				type: 'access',
				expiresIn: '24h',
			},
			refresh: {
				type: 'refresh',
				expiresIn: '24h',
			},
		}
	}
}