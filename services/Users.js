class UsersController {
	constructor(models) {
		this.models = models;
	}
	async getUser(_id) {
		let user = await this.models.users.findOne({_id})
			.select('name email dob role _id')
		if (!user) {
			throw new Error("User not found");
		}
		return user;
	};
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
}
module.exports = UsersController;