const {ErrorHandler} = require('../middleware/ErrorHendler');
const ErrorMessage = require('../helpers/error');

class UsersController {

	// ------------------------------------- done
	async getUsers(req, res) {
		try {
			let allusers = await req.app.services.users.getUsers();
			res.status(201).send(allusers);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

	// ------------------------------------- done
	async getUser(req, res) {
		const id = req.params.userId
		try {
			let user = await req.app.services.users.getUser(res, id);
			res.status(201).send(user);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};


	// ------------------------------------- done ?	/signup -ov
	async addUser(req, res) {
		const { name, surname, age, email, password, gender, dob, role } = req.body;
		let norUser = await req.app.services.users.addUser(res, name, surname, age, email, password, gender, dob, role)
			.then(result => {
				console.log("result:", result);
				if (result) {
					res.status(result.statusCode).json({
						message: result.message
					})
				}else{
					res.status(result.statusCode).json({
						message:result
					})
				}
			})
			.catch(err => {
				return  new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
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
				throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
			});
	};

	// -------------------------------------done!
	async deleteUser(req, res) {
		const id = req.params.userId;
		try {
			let delUsers = await req.app.services.users.deleteUser(id);
			let check = delUsers.user.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "User is deleted!",
					userId: id
				})
			}
			throw new ErrorHandler(409, `User ${ErrorMessage.NOTFOUND_ERROR}`);
		} catch (error) {
			throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
		}
	};

}
module.exports = UsersController;