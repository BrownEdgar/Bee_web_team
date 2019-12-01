const mongoose = require("mongoose");
const {
	ErrorHandler
} = require('../middleware/ErrorHendler');
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
		let candidats = await this.models.candidat.find()
			.select('openPosId name surname email age skills experience');
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
	async addCandidats(res, openPosId, name, surname, email, age, gender, skills, education, experience) {
		let sumary = this.models.candidat.find({
				email
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
						return new ErrorHandler(409, ErrorMessage.EMAIL_EXIST);
					}
				})
				.catch(err => {
					return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
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
			return new ErrorHandler(400, ErrorMessage.UPDATE_ERROR);
		}
		res.status(201).json(updateCandidat);
	};

	//delete Candidat by Id
	async deleteCandidat(res, _id) {
		let candidats = await this.models.candidat.deleteOne({
			_id
		})
		if (candidats.n >= 1) {
			Error.successful(res, `Candidat is deleted`);
		} else {
			Error.candidatDelError(res, `Candidat ${ErrorMessage.ID_ERROR} | ${ErrorMessage.CANDIDAT_DELETED}`);
		}
	}
}

module.exports = CandidatsController;