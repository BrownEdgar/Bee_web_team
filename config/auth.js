module.exports = {
	jwt: {
		secret: "ne vse mogut v IT",
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