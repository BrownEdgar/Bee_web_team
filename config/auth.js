module.exports = {
	jwt: {
		tokens:{
			access:{
				type: 'access',
				expiresIn: '10m',
			},
			refresh: {
				type: 'refresh',
				expiresIn: '30m',
			},
		}
	}
}