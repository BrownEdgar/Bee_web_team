class CandidatsController {

	// ------------------------------------- done!

	async getAllCandidats(req, res) {
		try {
			let allcandidats = await req.app.services.candidats.getAllCandidats();
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
			res.status(addcandidat.status).send(addcandidat);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

	// ------------------------------------- done
	async updateCandidat(req, res) {
		const id = req.params.candidatId;
		const updateOps = req.body;
		await req.app.services.candidats.updateCandidat(id, updateOps)

			.then(result => {
				res.status(200).json(result);
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
					message: "Open candidat is deleted!",
					benefitId: id
				})
			}
			res.status(409).json({
				message: "Open candidat ID is not found!",
				BenefitId: id
			});
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
}
module.exports = CandidatsController;