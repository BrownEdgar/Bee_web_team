const { ErrorHandler } = require('../middleware/ErrorHendler');
const { ErrorMessage, Errors } = require('../helpers/error')
const Error = new Errors();

class BenefitHistoryController {

// -------------------------------------
async getBenefitsHistory(req, res) {
	try {
		let allHistory = await req.app.services.benefitsHistorys.getBenefitsHistory(res);
		res.status(201).send(allHistory);
	} catch (error) {
		Error.serverError(res, error.message);
	}
};

// -------------------------------------
	async getHistoryById(req, res) {
		const id = req.params.historyId;
			let benHistory = await req.app.services.benefitsHistorys.getHistoryById(res, id)
			.then(result => {
				if (result) {
					res.status(200).send(result);
				}
				res.status(benHistory.statusCode).send(result);
				})
				.catch(err => {
					res.status(err.statusCode).json({
						error: err
					})
				});
	};
	
// -------------------------------------
	async addBenefitsHistory(req, res) {
		let { benefitId, userId } = req.body;
		try {
			let addBenHistory = await req.app.services.benefitsHistorys.addBenefitsHistory(res, benefitId, userId);
			if (addBenHistory) {
				res.status(201).send(addBenHistory);
			}
		} catch (error) {
			Error.serverError(res, error);
		}
		
					
			
	};

// -------------------------------------
	async deleteBenefitHistory(req, res) {
		const id = req.params.historyId;
		try {
			let delbenefits = await req.app.services.benefitsHistorys.deleteBenefitHistory(res, id);
			console.log("delbenefits:", delbenefits);
			
			let check = delbenefits.benHistory.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Benefit History is deleted!",
					benefitId: id
				})
			}
			throw new ErrorHandler(409, ErrorMessage.ID_ERROR);
		} catch (error) {
			throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
		}
	};
}
module.exports = BenefitHistoryController;