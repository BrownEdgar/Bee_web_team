const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {ErrorHandler} = require('../middleware/ErrorHendler');
const { ErrorMessage, Errors } = require('../helpers/error');
const Error = new Errors();

class UsersController {
	constructor(models) {
		this.models = models;
	}

	async loginUser(req, res) {
		if (!req.body.email || !req.body.password) {
			Error.loginError(res, `Invalid email or password field`);
		}
		this.models.users.findOne({
				email: req.body.email,
				deletedAt: null
			})
			.exec()
			.then(user => {
				if (!user) {
					Error.loginError(res, `Invalid email address`);
				}
				bcrypt.compare(req.body.password, user.password, (err, result) => {
					if (err) {
						Error.loginError(res, `${err.name}: ${err.message}`);
					}
					if (result) {
						const token = jwt.sign({
								email: user.email,
								userId: user._id
							},
							process.env.SESSION_SECRET, {
								expiresIn: "1h"
							}
						);
						return res.status(200).json({
							user,
							message: "Login successful",
							token: token
						});
					}
						Error.loginError(res, `Login failed, wrong password`)
				});
			})
			.catch(err => {
				Error.serverError(res, err.message);
			});
	};

	//get user done
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