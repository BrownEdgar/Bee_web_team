const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();



const REG_FIELDS = ['name', 'surname', 'age', 'email', 'password', 'gender', 'dob', 'role']
class LoginValidator {

isRegister(req, res, next) {
	let size = _.size(req.body);
	let passLength = req.body.password.length;
	if (size != 8 ) {
		return Error.registerError(res)
	} else if (passLength <= 6) {
		return Error.registerError(res, `Too few characters for password ${passLength} it's must by 6+`)
	}
	for(let key in req.body){
		
		let bool = _.includes(REG_FIELDS, key);
		if (!bool) {
		return Error.registerError(res)
		}	
	}
	next();
}

 isLogin (req, res, next){
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, process.env.SESSION_SECRET);
		req.userData = decoded;
		next();
	} catch (error) {
		return res.status(401).json({
			message: 'Please Login before doing any operations'
		});
	}
};
}

module.exports = LoginValidator;