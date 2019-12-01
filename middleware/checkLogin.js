const jwt = require('jsonwebtoken');
const {  Errors } = require('../helpers/error');
const Error = new Errors();

module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization');
	if (!authHeader) {
		return res.status(401).json({
			message: 'Token not Provided !'
		})
	}
	const token = authHeader.replace('Bearer ', '');
	try {
		const payload = jwt.verify(token, process.env.SESSION_SECRET);
		if (payload.type !== 'access') {
		  	Error.loginError(res, `Token expired`);
		}
	} catch (e) {
		if (e instanceof jwt.TokenExpiredError) {
			Error.loginError(res, `Token expired`);
			returnn;
		} 
		if (e instanceof jwt.JsonWebTokenError) {
			Error.loginError(res, `invalid Token`);
			return;
		}
	}
	next();
};