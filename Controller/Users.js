class UsersController {
	async getUser(req, res) {
		try {
			let user = await req.app.services.users.getUser(req.params.userId);
			res.status(201).send(user);
		} catch (error) {
			res.status(500).send(err.message);
		}
	};
	async getAllUsers(req, res) {
		try {
			let allusers = await req.app.services.users.getAllUsers();
			res.status(201).send(allusers);
		} catch (error) {
			res.status(500).send(err.message);
		}
	};

}
module.exports = UsersController;