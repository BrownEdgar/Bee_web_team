const  {ErrorMessage, Errors } = require('../helpers/error');
const Error = new Errors();

class CandidatsController {

	// ------------------------------------- done!

	async getCandidats(req, res) {
		try {
			let allcandidats = await req.app.services.candidats.getCandidats(res);
			res.status(201).send(allcandidats);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

	// ------------------------------------- done
	async getSpecialCandidat(req, res) {
		const id = req.params.Id
		try {
			await req.app.services.candidats.getSpecialCandidat(res, id);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};


	// ------------------------------------- done!	
	async addCandidats(req, res) {
		const openPosId = req.body.openPosId;
		// const cvName = req.file.originalname;
		// const userId = req.userData.userId;
		console.log(openPosId);
		
		try {
			 await req.app.services.candidats.addCandidats(res, openPosId);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

	// ------------------------------------- done
	async updateCandidat(req, res) {
		const id = req.params.Id;
		const updateOps = req.body;
		try {
			 await req.app.services.candidats.updateCandidat(res, id, updateOps);	
		} catch (error) {
			Error.serverError(res, error.message);
		}
	}

	// ------------------------------------- done!
	async deleteCandidat(req, res) {
		const id = req.params.Id;
		try {
			await req.app.services.candidats.deleteCandidat(res, id);
		} catch (error) {
			Error.serverError(res, error.message);
		}
	};
}
module.exports = CandidatsController;