const { ErrorMessage, Errors } = require('../helpers/error')
const Error = new Errors();

class BenefitHistoryController {
	constructor(models) {
		this.models = models;
	}

	//get all Benefit Lists done
	async getBenefitsHistory(res) {
		let benHistory = await this.models.benefitsHistory.find()
		.populate("benefitId", "title")
		.populate("userId", 'firstname')
		if (!benHistory.length) {
			throw Error.noDataError(res);
		}
		return {
			count: benHistory.length,
			benHistory
		};
	};

	//get Benefits History by spesial ID
	async getHistoryById(res, _id) {
		let benHistoryId = await this.models.benefitsHistory.findOne({
			_id
		})
		if (!benHistoryId) {
			throw Error.conflictError(res, ErrorMessage.ID_ERROR);
		}
		return benHistoryId;
	};

	//add new Benefits History in Collection
	async addBenefitsHistory(res, benefitId, userId) {
		let check = await this.models.benefits.find({
			_id: benefitId
		})
		console.log("check: ", check);
		if (check.length< 1) {
			throw Error.notFoundError(res, `benefitId is not found`);
		}
		let sumary =this.models.benefitsHistory.find({
				benefitId,
				userId
			})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					Error.notFoundError(res, ErrorMessage.GIFT_ERROR);
				} else {
					const norBenefitHistory = new this.models.benefitsHistory({
						benefitId,
						userId
					});
					norBenefitHistory.save()
					return  norBenefitHistory;
				}
			}).catch(err => {
				throw Error.serverError(res);
			});
			return sumary;
	};

	//delete Benefits History by Id
	async deleteBenefitHistory(res, _id) {
		let benHistory = await this.models.benefitsHistory.deleteOne({
			_id
		})
		if (!benHistory) {
			throw Error.notFoundError(res);
		}
		return {
			count: benHistory.length,
			benHistory
		};
	}
}

module.exports = BenefitHistoryController;