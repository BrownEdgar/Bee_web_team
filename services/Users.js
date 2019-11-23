const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { ErrorHandler } = require('../middleware/ErrorHendler');
const { ErrorMessage, Errors } = require('../helpers/error');
const Error = new Errors();

class UsersController {
	constructor(models) {
		this.models = models;
	}

	//get user done
	async getUser(res, _id) {
		let user = await this.models.users.findOne({
				_id: _id,
				deletedAt: null
			})
			.select('firsname lastname email birthday phoneNumber role salary _id')
		if (!user) {
			return Error.conflictError(res, `User ${ErrorMessage.ID_ERROR}`);
		}
		return user;
	};

	//get All users from User Collections done
	async getUsers() {
		let users = await this.models.users.find({
				deletedAt: null
			})
			.select('firstname lastname salary phoneNumber email birthday password role _id');
		if (users.length < 1) {
			throw new ErrorHandler(409, `${ErrorMessage.NO_DATA_ERROR}`);
		}
		return {
			count: users.length,
			users
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
		let chekDeleted = await await this.models.users.find({
			_id,
			deletedAt: {
				$gt: 1
			}
		})
		if (chekDeleted.length >=1) {
			throw Error.notFoundError(res, `User is alredy Deleted`);
		}else{
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