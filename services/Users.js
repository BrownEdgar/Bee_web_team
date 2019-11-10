const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

class UsersController {
	constructor(models) {
		this.models = models;
	}
	
	//get user done
	async getUser(_id) {
		let user = await this.models.users.findOne({_id})
			.select('name email dob role _id')
		if (!user) {
			throw new Error("User not found");
		}
		return user;
	};

	//get All users from User Collections done
	async getAllUsers() {
		let users = await this.models.users.find()
			.select('name email dob role _id');
		if (users.length < 1) {
			throw new Error('Users not found')
		}
		return {
			count: users.length,
			users
		};
	}

	//add new Benefit in Collection
	async addUser(name, email, password, gender, dob, role) {
		this.models.users.find({email})
			.exec()
			.then(user => {
				if (user.length >= 1) {
					 throw new Error("Mail exists");
				} 
					const norUser = new this.models.users({
						_id: new mongoose.Types.ObjectId(),
						name,
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
			throw new Error('User update failed');
		}
		return updateUser;
	};

	//delete Benefit by Id done!
	async deleteUser(_id) {
		let user = await this.models.users.deleteOne({
			_id
		})
		if (!user) {
			return new Error('User not found')
		}
		return {
			count: user.length,
			user
		};
	}
}
module.exports = UsersController;