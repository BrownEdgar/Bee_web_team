import mongoose from "mongoose";
import { ErrorHandler } from '../middleware/ErrorHendler';
import  { ErrorMessage } from '../helpers/error';

class CandidatsController {
	constructor(models) {
		this.models = models;
	}

	//get all Candidat Lists done!
	async getCandidats() {
		let candidats = await this.models.candidat.find()
			.select('openPosId name surname email age skills experience');
		if (candidats.length < 1) {
			 throw new ErrorHandler(409, ErrorMessage.NO_DATA_ERROR);
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
			throw new ErrorHandler(409, ErrorMessage.NOTFOUND_ERROR);
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
					return new ErrorHandler(409, ErrorMessage.EMAIL_EXIST);
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
				return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
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
					 return new ErrorHandler(409, ErrorMessage.EMAIL_EXIST);
				} else {
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
					return updateCandidat;
				}
			})
			.catch(err => {
				return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
			});

		return sumary

	};

	//delete Candidat by Id
	async deleteCandidat(_id) {
		let candidats = await this.models.candidat.deleteOne({
			_id
		})
		if (!candidats) {
			throw new ErrorHandler(409, `Candidat ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return {
			count: candidats.length,
			candidats
		};
	}
}

export default CandidatsController;