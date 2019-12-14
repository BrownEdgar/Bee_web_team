const { Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();

class UsersController {

	async refreshTokens(req, res) {
		const { refreshToken } = req.body;
			 if (!refreshToken) {
			 	Error.serverError(res, `refreshToken not exist`);
			 }
		try {
		await req.app.services.users.refreshTokens( res, refreshToken);
		} catch (e) {	
			Error.serverError(res, e.message);
		}
	};
	// ------------------------------------- 
		async loginUser(req, res) {
			try {
				await req.app.services.users.loginUser(req, res);	
			} catch (error) {
				Error.serverError(res, error.message);
			}
		};

	// ------------------------------------- 
	async getUsers(req, res) {
		try {
			let allusers = await req.app.services.users.getUsers(res);
			res.status(201).send(allusers);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
	// ------------------------------------- done

	async getMyInfo(req, res, next) {
		console.log('req.userData.userId',req.userData.userId);
		
	try {
		let user = await req.app.services.users.getUser(res, req.userData.userId);
		return res.status(201).send(user);
	} catch (err) {
		return Error.notFoundError(res, `User ${ErrorMessage.NOTFOUND_ERROR}`);
	}
	};

	// ------------------------------------- done
	async getUser(req, res) {
		const id = req.params.Id
		try {
			let user = await req.app.services.users.getUser(res, id);
			res.status(201).send(user);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

	// ------------------------------------- done ?	/signup -ov
	async addUser(req, res) {
		const { firstname, lastname, salary, phoneNumber, email, password, birthday, role } = req.body;
		let norUser = await req.app.services.users.addUser(res, firstname, lastname, salary, phoneNumber, email, password, birthday, role)
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
				return Error.serverError(res);
			});
	};

	// ------------------------------------- done!
	async updateUser(req, res) {
		const id = req.params.Id;
		const updateOps = req.body;
		let x = await req.app.services.users.updateUser(res, id, updateOps)
		x.save()
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				throw Error.serverError(res);
			});
	};

	// -------------------------------------done!
	async deleteUser(req, res) {
		const id = req.params.Id;
		try {
			let delUsers = await req.app.services.users.deleteUser(res, id);
				return res.status(201).json({
					message: "User is deleted!",
					userId: id
				})
		} catch (error) {
			throw Error.serverError(res);
		}
	};
}

module.exports = UsersController;