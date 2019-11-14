const jwt = require('jsonwebtoken');
const _ = require('lodash');
const {ErrorHandler} = require('../middleware/ErrorHendler');
const ErrorMessage = require('../helpers/error');



const REG_FIELDS = ['name', 'surname', 'age', 'email', 'password', 'gender', 'dob', 'role']
class LoginValidator {

isRegister(req, res, next) {
	let size = _.size(req.body);
	if (size != 8 ) {
		return res.status(412).json({
			message:ErrorMessage.EXTRA_ERROR
		});
	}
	for(let key in req.body){
		let bool = _.includes(REG_FIELDS, key);
		if (!bool) {
			return res.status(412).send(ErrorMessage.REGISTER_ERROR);
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