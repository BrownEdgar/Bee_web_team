const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {ErrorHandler} = require('../middleware/ErrorHendler');
const { ErrorMessage, Errors } = require('../helpers/error');
const Error = new Errors();
const authHelper = require('../helpers/authHelper');
const secret = process.env.SESSION_SECRET || "secretWord";
const models = require("../models");
const Token = models.Token;


class UsersController {
	constructor(models) {
		this.models = models;
	}
	async refreshTokens(req, res, refreshToken) {
		let payload;
		try {
			payload = jwt.verify(refreshToken, secret);
			
			if (payload.type !== "refresh") {
				Error.serverError(res, `invalid Token!`);
				return;
			}
		} catch (e) {
			if (e instanceof jwt.TokenExpiredError) {
				Error.serverError(res, `Token expired!`);
				returnn;
			} else if (e instanceof jwt.JsonWebTokenError) {
				Error.serverError(res, `invalid token!`);
				return;
			}
		}
			Token.findOne({ tokenId: peyload.id})
			exec()
			.then((token) => {
				if (token === null) {
				throw Error.serverError(res, `invalid token`);
				}
				this.updateTokens(token.userId);
			})
			.then(tokens => res.json(tokens))
			.catch(err => res.status(400).json({
				message:err.message
			}))
	};
	async updateTokens(userId) {
		const accessToken = authHelper.generateAccessToken(userId);
		const refreshToken = authHelper.generateRefreshToken();
		return authHelper.replaseRefreshToken(refreshToken.id, userId)
			.then((x) => ({

				accessToken,
				refreshToken: refreshToken.token
			}));
	};
	async loginUser(req, res) {
		const {email, password } = req.body;

		if (!email || !password) {
			Error.loginError(res, `Invalid email or password field`);
		}
		this.models.users.findOne({
				email,
				deletedAt: null
			})
			.exec()
			.then(user => {
				if (!user) {
					Error.loginError(res, `User does not exist`);
				}
				// new logic
				 const isValid = bcrypt.compareSync(password, user.password);
					if (isValid) {		
						this.updateTokens(user._id).then(tokens => {
					      Error.successfulToken(res, user, tokens);// uxarkum enq 2 token
						})
					}else{
					  return Error.serverError(res, `Invalid credentials!`);
					}	
			})
			.catch(err => {
				Error.serverError(res, err.message);
			});
	};

	//get user by Id
	async getUser(res, _id) {
		let user = await this.models.users.findOne({
				_id: _id,
				deletedAt: null
			})
			.select('firstname lastname email birthday phoneNumber role salary _id')
		if (!user) {
			return Error.conflictError(res, `User ${ErrorMessage.ID_ERROR}`);
		}
		return user;
	};

	//get All users from User Collections 
	async getUsers(res) {
		let users = await this.models.users.find({
				deletedAt: null
			})
			.select('firstname lastname salary phoneNumber email birthday password role _id');
		if (users.length < 1) {
			throw new ErrorHandler(409, `${ErrorMessage.NO_DATA_ERROR}`);
		}
		return {
			count: users.length,
			users: res.pagination
		};
	}

	//add new users in Collection
	async addUser(res, firstname, lastname, salary, phoneNumber, email, password, birthday, role) {
		let result = this.models.users.find({
				email
			})
			.exec()
			.then(user => {
				console.log("user: ", user);
				if (user.length >= 1) {
					return Error.conflictError(res, `${ErrorMessage.EMAIL_EXIST}`);
				}
				const norUser = new this.models.users({
					_id: new mongoose.Types.ObjectId(),
					firstname,
					lastname,
					salary,
					phoneNumber,
					email,
					password,
					birthday,
					role
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(norUser.password, salt, function (err, hash) {
						if (err) {
							throw err;
						}
						norUser.password = hash;
						let r = norUser.save(function (err) {
							if (err) {
								return Error.saveError(res, `${err.message}`);
							}
							return Error.successful(res);
						})
						return r;
					})
				})
			})
			.catch(err => {
				return Error.successful(res, `${err.message}`);
			});
		return result
	};

	//Update User in Collection done
	async updateUser(_id, updateOps) {
		const updateUser = await this.models.users.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select('firsname lastname salary phoneNumber email birthday role');
		if (!updateUser) {
			throw new ErrorHandler(409, `User ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return updateUser;
	};

	//delete User by Id done!
	async deleteUser(res, _id) {
		let chekDeleted = await this.models.users.find({
			_id,
			deletedAt: {
				$gt: 1
			}
		})
		if (chekDeleted.length >= 1) {
			throw Error.notFoundError(res, `User is alredy Deleted`);
		} else {
			let user = await this.models.users.findByIdAndUpdate({
				_id
			}, {
				deletedAt: Date.now()
			})
			if (!user) {
				throw Error.notFoundError(res, `User ${ErrorMessage.NOTFOUND_ERROR}`);
			}
			return {
				count: user.length,
				user
			}
		}
	}
}



module.exports = UsersController;