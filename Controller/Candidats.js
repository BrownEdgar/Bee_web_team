import { ErrorHandler } from '../middleware/ErrorHendler';
import { ErrorMessage, Errors } from '../helpers/error';

class CandidatsController {

	// ------------------------------------- done!

	async getCandidats(req, res) {
		try {
			let allcandidats = await req.app.services.candidats.getCandidats();
			res.status(201).send(allcandidats);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

	// ------------------------------------- done
	async getSpecialCandidat(req, res) {
		const id = req.params.candidatId
		try {
			let candidat = await req.app.services.candidats.getSpecialCandidat(id);
			res.status(201).send(candidat);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};



	// ------------------------------------- done!	
	async addCandidats(req, res) {
		let {
			openPosId,
			name,
			surname,
			email,
			age,
			gender,
			skills,
			education,
			experience
		} = req.body;
		try {
			let addcandidat = await req.app.services.candidats.addCandidats(openPosId, name, surname, email, age, gender, skills, education, experience);
			res.status(addcandidat.statusCode).send(addcandidat);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

	// ------------------------------------- done
	async updateCandidat(req, res) {
		const id = req.params.candidatId;
		const updateOps = req.body;
		let updateCandidat = await req.app.services.candidats.updateCandidat(id, updateOps)
			.then(result => {
				res.status(result.statusCode).send(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				})
			});
	};

	// ------------------------------------- done!
	async deleteCandidat(req, res) {
		const id = req.params.candidatId;
		try {
			let delbenefits = await req.app.services.candidats.deleteCandidat(id);
			let check = delbenefits.candidats.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Candidat is deleted!",
					benefitId: id
				})
			}
			throw new ErrorHandler(409, ErrorMessage.ID_ERROR);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
}
export default  CandidatsController;