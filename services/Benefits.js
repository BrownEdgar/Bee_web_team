const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class BenefitsController {
	constructor(models) {
		this.models = models;
	}
	
	//get all Benefit Lists
	async getAllBenefits() {
		let benefits = await this.models.benefits.find()
			.select('title description _id');
		if (benefits.length < 1) {
			throw new ErrorHandler(404, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: benefits.length,
			benefits
		};
	};
	
	//get benefit by spesial ID
	async getBenefit(_id) {
		let benefit = await this.models.benefits.findOne({
				_id
			})
			.select('title description _id')
		if (!benefit) {
			throw new ErrorHandler(404, ErrorMessage.NOTFOUND_ERROR);
		}
		return benefit;
	};

	//add new Benefit in Collection
	async addBenefits(title, description = "for a good job!") {
		const norBenefit = new this.models.benefits({
			title,
			description
		});
		return norBenefit.save();
	};

	//Update Benefit in Collection
	async updateBenefits(_id, updateOps) {
	const updateBenefit = await this.models.benefits.findByIdAndUpdate({
				 				_id
				 			}, {
				 				$set: updateOps
				 			}, {
				 				new: true
				 			})
	.select('title description _id');
	if (!updateBenefit) {
		throw new ErrorHandler(404, ErrorMessage.ID_ERROR);
	}
	return updateBenefit;
	};

	//delete Benefit by Id
	async deleteBenefits(_id) {
		let benefits = await this.models.benefits.deleteOne({
			_id
		})
		if (!benefits) {
			throw new ErrorHandler(404, ErrorMessage.NOTFOUND_ERROR);
		}
		return {
			count: benefits.length,
			benefits
		};
	}
}

module.exports = BenefitsController;