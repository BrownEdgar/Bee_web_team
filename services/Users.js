const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class UsersController {
	constructor(models) {
		this.models = models;
	}
	
	//get user done
	async getUser(_id) {
		let user = await this.models.users.findOne({_id})
			.select('name email dob role _id')
		if (!user) {
			throw new ErrorHandler(409, `User ${ErrorMessage.ID_ERROR}`);
		}
		return user;
	};

	//get All users from User Collections done
	async getAllUsers() {
		let users = await this.models.users.find()
			.select('name surname age email dob role _id');
		if (users.length < 1) {
			throw new ErrorHandler(409, `${ErrorMessage.NO_DATA_ERROR}`);
		}
		return {
			count: users.length,
			users
		};
	}

	//add new users in Collection
	async addUser(name, surname, age, email, password, gender, dob, role) {
		this.models.users.find({email})
			.exec()
			.then(user => {
				if (user.length >= 1) {
					 throw new ErrorHandler(409, `${ErrorMessage.EMAIL_EXIST}`);
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
			  	bcrypt.hash(norUser.password, salt,  function (err, hash) {
			  		if (err) {
			  			throw err;
			  		}
			  		norUser.password = hash;
					let r = norUser.save();
					return r;
			  	})
			  })
			});
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

	//delete Benefit by Id done!
	async deleteUser(_id) {
		let user = await this.models.users.deleteOne({
			_id
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