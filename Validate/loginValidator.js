const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();



const REG_FIELDS = ['firstname', 'lastname', 'salary', 'phoneNumber', 'email', 'password', 'birthday', 'role']
class LoginValidator {

isRegister(req, res, next) {
	let size = _.size(req.body);
	if (size != 8 ) {
		return Error.registerError(res)	
	} else if (req.body.password.length <= 6) {
		return Error.registerError(res, `Too few characters for password ${req.body.password.length} it's must by 6+`)
	}
	for(let key in req.body){
		let fieldCheck = _.includes(REG_FIELDS, key);
		if (!fieldCheck) {
		return Error.registerError(res, `${key} field is not present, please fill correct`)
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
isIdCorrect(req, res, next) {
		const id = req.params.userId;
		if (id.length != 12) {
			console.log(id);
			return Error.idLengthError(res);
		}
}
}

module.exports = LoginValidator;