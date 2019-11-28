const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();
const User = require('../models/User')



const REG_FIELDS = ['firstname', 'lastname', 'salary', 'phoneNumber', 'email', 'password', "repeatPassword", 'birthday', 'role'];
const CANDIDATS_FIELDS = ['openPosId', 'name', 'surname', 'age', 'email', 'skills', "experience", 'education', 'gender'];
const OPEN_POSITIONS_FIELDS = ['title', 'description', 'gender', 'ageLimit', 'salary'];
class LoginValidator {
	isRegister(req, res, next) {
		let size = _.size(req.body);
		if (size != 9) {
			return Error.registerError(res)
		}
		if (!(req.body.password)) {
			return Error.registerError(res, `Please add password field`);
		} else if (req.body.password.length <= 6) {
			return Error.registerError(res, `Too few characters for password ${req.body.password.length} it's must by 6+`)
		} else if (req.body.password != req.body.repeatPassword) {
			return Error.registerError(res, `Passwords do not match`)
		}
		for (let key in req.body) {
			let fieldCheck = _.includes(REG_FIELDS, key);
			if (!fieldCheck) {
				return Error.registerError(res, `${key} field is not present, please fill correct`)
			}
		}
		next();
	}

	async isLogin(req, res, next) {
		try {
			const token = req.headers.authorization.split(' ')[1];
		
			const decoded = jwt.verify(token, process.env.SESSION_SECRET);
				if (!decoded) {
					return res.status(401).json({
						message: 'jwt token Error',
					});
				}else{
					req.userData = decoded;
				}
			next();
		} catch (error) {
			return res.status(401).json({
				message: 'Please Login before doing any operations',
				error
			});
		}
	};

	isIdCorrect(req, res, next) {
		const id = req.params.Id;
		if (id.length != 24) {
			return Error.idLengthError(res);
		}
		next();
	}

	checkCandidatAdds(req, res, next) {
		let size = _.size(req.body);
		// if (size != 9) {
		// 	return Error.registerError(res)
		// }
		for (let key in req.body) {
			let fieldCheck = _.includes(CANDIDATS_FIELDS, key);
			if (!fieldCheck) {
				return Error.registerError(res, `${key} field is not present, please fill correct`)
			}
		}
		next();
	}
	checkOpenPositionAdds(req, res, next) {
		console.log("1111");
		let size = _.size(req.body);
		if (size > 5) {
			return Error.registerError(res, `Presented too many fields.`)
		} else if (size < 5){
			return Error.registerError(res, `We need five fields, to successfully complete the operation`);
		}
		for (let key in req.body) {
			console.log(key);	
			let fieldCheck = _.includes(OPEN_POSITIONS_FIELDS, key);
			if (!fieldCheck) {
			return Error.registerError(res, `${key} field is not present, please fill correct`)
			}
		}
		next();
	}
	


}

module.exports = LoginValidator;