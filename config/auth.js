module.exports = {
	jwt: {
		secret: "ne vse mogut v IT",
		tokens:{
			access:{
				type: 'access',
				expiresIn: '2m',
			},
			refresh: {
				type: 'refresh',
				expiresIn: '10m',
			},
		}
	}
}