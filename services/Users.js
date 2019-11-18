const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { ErrorHandler } = require('../middleware/ErrorHendler');
const {ErrorMessage, Errors} = require('../helpers/error');
const Error = new Errors();

class UsersController {
	constructor(models) {
		this.models = models;
	}

	//get user done
	async getUser(res, _id) {
		let user = await this.models.users.findOne({
				_id
			})
			.select('name email dob role _id')
		if (!user) {
			Error.conflictError(res, `User ${ErrorMessage.ID_ERROR}`);
		}
		return user;
	};

	//get All users from User Collections done
	async getUsers() {
		let users = await this.models.users.find()
			.select('name surname age email password dob role _id');
		if (users.length < 1) {
			throw new ErrorHandler(409, `${ErrorMessage.NO_DATA_ERROR}`);
		}
		return {
			count: users.length,
			users
		};
	}

	//add new users in Collection
	async addUser(res, name, surname, age, email, password, gender, dob, role) {
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
					name,
					surname,
					age,
					email,
					password,
					gender,
					dob,
					role
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(norUser.password, salt, function (err, hash) {
						if (err) {
							throw err;
						}
						norUser.password = hash;
						let r = norUser.save(function(err){
							if (err) {
								return Error.saveError(res, `${err.message}`);
							}
							return Error.successful(res);
						})
						return r;
					})
				})	
			})
			.catch(err =>{
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
			.select('name email gender dob _id');
		if (!updateUser) {
			throw new ErrorHandler(409, `User ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return updateUser;
	};

	//delete User by Id done!
	async deleteUser(_id) {
		let user = await this.models.users.findByIdAndUpdate({
			_id
		}, {
			deletedAt: Date.now()
		})
		if (!user) {
			throw new ErrorHandler(409, `User ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return {
			count: user.length,
			user
		};
	}
}
module.exports = UsersController;