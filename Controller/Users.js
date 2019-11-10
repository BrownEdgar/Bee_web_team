class UsersController {

	// ------------------------------------- done
	async getUser(req, res) {
		try {
			let user = await req.app.services.users.getUser(req.params.userId);
			res.status(201).send(user);
		} catch (error) {
			res.status(500).send(err.message);
		}
	};

	// ------------------------------------- done
	async getAllUsers(req, res) {
		try {
			let allusers = await req.app.services.users.getAllUsers();
			res.status(201).send(allusers);
		} catch (error) {
			res.status(500).send(err.message);
		}
	};

	// ------------------------------------- done ?	/signup -ov
	async addUser(req, res) {
	const { name, email, password, gender, dob, role} = req.body;
	await req.app.services.users.addUser(name, email, password, gender, dob, role)
	.then(result =>{
		res.status(200).json({
			message:"user Created"
		})	
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
};


	// ------------------------------------- done!
	async updateUser(req, res) {
		const id = req.params.userId;
		const updateOps = req.body;
		let x = await req.app.services.users.updateUser(id, updateOps)
		x.save()
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				})
			});
	};

	// -------------------------------------done!
	async deleteUser(req, res) {
		const id = req.params.userId;
		try {
			let delUsers = await req.app.services.users.deleteUser(id);
			console.log("delUsers:", delUsers);
			
			let check = delUsers.user.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "User is deleted!",
					userId: id
				})
			}
			res.status(409).json({
				message: "User Id is not found!",
				userId: id
			});
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

}
module.exports = UsersController;