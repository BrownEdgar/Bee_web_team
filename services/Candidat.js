const mongoose = require("mongoose");
const {
	ErrorMessage,
	Errors
} = require('../helpers/error');
const Error = new Errors();

class CandidatsController {
	constructor(models) {
		this.models = models;
	}

	//get all Candidat Lists done!
	async getCandidats(res) {
		let candidats = await this.models.candidat.find({deletedAt:null})
			.select('openPosId name surname email age skills experience deletedAt');
		if (candidats.length < 1) {
			throw Errors.notFoundError(res, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: candidats.length,
			candidats
		};
	};

	//get Candidat by spesial ID done
	async getSpecialCandidat(res, _id) {
		let candidats = await this.models.candidat.findOne({
				_id
			})
			.select('openPosId name surname email age skills experience');
		if (!candidats) {
			Error(res, ErrorMessage.NOTFOUND_ERROR);
		}
		res.status(201).json(candidats);
	};

	//add new candidats in Collection done!
	async addCandidats(res, createdOps) {
		let sumary = this.models.candidat.find({
				email,
				deletedAt: null
			})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					return Error.conflictError(res, ErrorMessage.EMAIL_EXIST);
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
					norCandidat.save(function (err) {
						if (err) {
							return Error.saveError(res, `${err.message}`);
						}
						return Error.successful(res);
					});
				}
			}).catch(err => {
				return Error.serverError(res)
			});
		return sumary
	};

	//Update Candidat in Collection done!
	async updateCandidat(res, _id, updateOps) {
		console.log("updateOps", updateOps.email);
		if (updateOps.email) {
			const sumary = await this.models.candidat.findOne({
					email: updateOps.email
				})
				.exec()
				.then(result => {
					if (result) {
						return Error.conflictError(res, ErrorMessage.EMAIL_EXIST);
					}
				})
				.catch(err => {
					return Error.serverError(res);
				});
		}
		const updateCandidat = await this.models.candidat.findByIdAndUpdate({
			_id
		}, {
			$set: updateOps
		}, {
			new: true
		})

		if (!updateCandidat) {
			return Error.updateError(res);
		}
		res.status(201).json(updateCandidat);
	};

	//delete Candidat by Id
	async deleteCandidat(res, _id) {
		let checkDeleted = await this.models.candidat.find({
		_id,
		deletedAt: {
			$gt: 1
		}
	})	
	if (checkDeleted) {
		return Error.successful(res, `Candidat is alredy deleted`);
	} else{
		let candidat = await this.models.candidat.findByIdAndUpdate({
			_id
		}, {
			deletedAt: Date.now()
		})
		if (!candidat) {
			return Error.candidatDelError(res, `Candidat ${ErrorMessage.ID_ERROR} | ${ErrorMessage.CANDIDAT_DELETED}`);
		}else{
			return  Error.successful(res, `Candidat is deleted`);
		}
	}
}
}

module.exports = CandidatsController;