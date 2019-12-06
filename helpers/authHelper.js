const jwt = require("jsonwebtoken");
const uuid = require('uuid/v4');
const { tokens } = require('../config/auth').jwt;
const secret = process.env.SESSION_SECRET || "secretWord";
const models = require("../models");
const Token = models.Token;

//access token generator
const generateAccessToken = (userId) => {
	const payload = {
		userId,
		type: tokens.access.type,
	};
	const options = {
		expiresIn:tokens.access.expiresIn
	};
	return jwt.sign(payload, secret, options);
}

//refresh token generator
const generateRefreshToken = () => {
	const payload = {
		id: uuid(),
		type: tokens.refresh.type,
	};
	const options = { expiresIn: tokens.refresh.expiresIn };
	return {
		id: payload.id,
		token: jwt.sign(payload, secret, options),
	}
}

const replaseRefreshToken = (tokenId, userId) => {
	let RefreshToken = Token.findOneAndRemove({userId})
	.exec()
	.then(() => Token.create({ tokenId, userId }));
	return RefreshToken;
}

module.exports = {
	generateAccessToken,
	generateRefreshToken,
	replaseRefreshToken
};