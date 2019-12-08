const { ErrorMessage, Errors } = require('../helpers/error')
const mongoose = require("mongoose");
const Error = new Errors();

class BenefitsController {
	constructor(models) {
		this.models = models;
	}
	
	//get all Benefit Lists
	async getBenefits(res) {
		let benefits = await this.models.benefits.find()
			.select('title description _id');
		if (benefits.length < 1) {
			Error.conflictError(res, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: benefits.length,
			benefits
		};
	};
	//get benefit by spesial ID
	async getBenefit(res, _id) {
		let benefit = await this.models.benefits.findOne({
				_id
			})
			.select('title description _id')
		if (!benefit) {
			Error.conflictError(res, ErrorMessage.ID_ERROR)
		}
		return benefit;
	};

	//add new Benefit in Collection
	async addBenefits(res, title, description = "for a good job!") {
		let sumary = this.models.benefits.find({
				title,
				description
			})
			.exec()
			.then(result => {
					if (result.length >= 1) {
						Error.conflictError(res, ErrorMessage.POSITION_EXIST);
					} else {
						const norBenefit = new this.models.benefits({
							_id: new mongoose.Types.ObjectId(),
							title,
							description
						});
						return norBenefit.save();
					}});
			return sumary;
	};

	//Update Benefit in Collection
	async updateBenefits(res, _id, updateOps) {
	const updateBenefit = await this.models.benefits.findByIdAndUpdate({
				 				_id
				 			}, {
				 				$set: updateOps
				 			}, {
				 				new: true
				 			})
	.select('title description _id');
	if (!updateBenefit) {
	return 	Error.notFoundError(res);
	}
	return updateBenefit;
	};

	//delete Benefit by Id
	async deleteBenefit(_id) {
		let benefits = await this.models.benefits.deleteOne({
			_id
		})
		console.log("benefits: ", benefits);
		let check = benefits.deletedCount;
		if (check == 0) {
		return Error.conflictError(409, ErrorMessage.ID_ERROR);
		}
		return {
			count: benefits.length,
			benefits
		};
	}
}

module.exports = BenefitsController;