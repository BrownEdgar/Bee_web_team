const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class BenefitHistoryController {
	constructor(models) {
		this.models = models;
	}

	//get all Benefit Lists done
	async getBenefitsHistory() {
		let benHistory = await this.models.benefitsHistory.find()
		if (benHistory.length < 1) {
			throw new ErrorHandler(500, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: benHistory.length,
			benHistory
		};
	};

	//get Benefits History by spesial ID
	async getHistoryById(_id) {
		let benHistoryId = await this.models.benefitsHistory.findOne({
			_id
		})
		if (!benHistoryId) {
			throw new ErrorHandler(409, ErrorMessage.ID_ERROR);
		}
		return benHistoryId;
	};

	//add new Benefits History in Collection
	async addBenefitsHistory(benefitId, userId) {
		let sumary =this.models.benefitsHistory.find({
				benefitId,
				userId
			})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					throw new ErrorHandler(409, ErrorMessage.GIFT_ERROR);
				} else {
					const norBenefitHistory = new this.models.benefitsHistory({
						benefitId,
						userId
					});
					norBenefitHistory.save();
					return ({
						status: 201,
						message: "Benefit History is created"
					})
				}
			}).catch(err => {
				throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
			});
			return sumary;
	};

	//Update Benefits History in Collection
	async updateBenefitsHistory(_id, updateOps) {
		const updateBenefit = await this.models.benefitsHistory.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select('title description _id');
		if (!updateBenefit) {
			throw new ErrorHandler(500, ErrorMessage.UPDATE_ERROR);
		}
		return updateBenefit;
	};

	//delete Benefits History by Id
	async deleteBenefitHistory(_id) {
		let benHistory = await this.models.benefitsHistory.deleteOne({
			_id
		})
		if (!benHistory) {
			throw new ErrorHandler(409, ErrorMessage.NOTFOUND_ERROR);
		}
		return {
			count: benHistory.length,
			benHistory
		};
	}
}

module.exports = BenefitHistoryController;