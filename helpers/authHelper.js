const jwt = require("jsonwebtoken");
const {
	tokens
} = require('../config/auth').jwt;
const secret = process.env.SESSION_SECRET;

const User = require('../models/User')
const {
	ErrorMessage,
	Errors
} = require('../helpers/error');
const Error = new Errors();



const generateAccessToken = (userId) => {
	const payload = {
		userId,
		type: tokens.access.type,
	};
	const options = {
		expiresIn: tokens.access.expiresIn
	};
	return jwt.sign(payload, secret, options);
}

//refresh token generator
const generateRefreshToken = (userId) => {
	const payload = {
		id: userId,
		type: tokens.refresh.type,
	};
	const options = {
		expiresIn: tokens.refresh.expiresIn
	};
	return jwt.sign(payload, secret, options);
}

const updateTokens = (userId) => {

	const accessToken = generateAccessToken(userId);
	const refreshToken = generateRefreshToken(userId);
	return ({ accessToken, refreshToken });
};

const replaseRefreshToken = (res, userId) => {
	let RefreshToken = User.findOne({
			_id: userId,
			deletedAt: null
		})
		.exec()
		.then((user) => {
			if (!user) {
				Error.notFoundError(res, "user not foung");
				return;
			}
			return updateTokens(user.id)	
		})
		.then((tokens) => {
			return tokens;
		})
		.catch(err => {
			return Error.serverError(res, `${err.ErrorMessage}`)
		})
		return RefreshToken;
}

module.exports = {
	generateAccessToken,
	generateRefreshToken,
	replaseRefreshToken,
	updateTokens
};