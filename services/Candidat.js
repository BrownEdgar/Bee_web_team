const mongoose = require("mongoose");
class CandidatsController {
	constructor(models) {
		this.models = models;
	}

	//get all Candidat Lists done!
	async getAllCandidats() {
		let candidats = await this.models.candidat.find()
			.select('openPosId name surname email age skills experience');
		if (candidats.length < 1) {
			throw new Error('Candidats is not found')
		}
		return {
			count: candidats.length,
			candidats
		};
	};

	//get Candidat by spesial ID done
	async getSpecialCandidat(_id) {
		let candidats = await this.models.candidat.findOne({
				_id
			})
			.select('openPosId name surname email age skills experience');
		if (!candidats) {
			throw new Error("Candidat is not found");
		}
		return candidats;
	};

	//add new candidats in Collection done!
	async addCandidats(openPosId, name, surname, email, age, gender, skills, education, experience) {
		let sumary = this.models.candidat.find({
				email
			})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					const message = {
						status: 409,
						message: "This Email is already exists"
					}
					return message;
				} else {
					const norCandidat = new this.models.candidat({
						_id: new mongoose.Types.ObjectId(),
						openPosId,
						name,
						surname,
						email,
						age,
						gender,
						skills,
						education,
						experience
					});
					norCandidat.save();
					return ({
						status: 201,
						message: "Candidats is created"
					})
				}
			}).catch(err => {
				return ({
					status: 500,
					message: "Sameting is Wrong, Server error"
				})
			});
		return sumary
	};

	//Update Candidat in Collection done!
	async updateCandidat(_id, updateOps) {
		console.log("updateOps", updateOps.email);
		let sumary = this.models.candidat.find({
				email: updateOps.email
			})
			.exec()
			.then(async (result) => {
				if (result.length >= 1) {
					const message = {
						status: 409,
						message: "Email already exists"
					}
					return message;
				} else {
					const updateCandidat = await this.models.candidat.findByIdAndUpdate({
						_id
					}, {
						$set: updateOps
					}, {
						new: true
					})
					if (!updateCandidat) {
						throw new Error('Candidats  update failed');
					}
					return updateCandidat;
				}
			})
			.catch(err => {
				return ({
					status: 500,
					message: "Sameting is Wrong, Server error"
				})
			});

		return sumary

	};

	//delete Candidat by Id
	async deleteCandidat(_id) {
		let candidats = await this.models.candidat.deleteOne({
			_id
		})
		if (!candidats) {
			return new Error('Candidats is  not found')
		}
		return {
			count: candidats.length,
			candidats
		};
	}
}

module.exports = CandidatsController;