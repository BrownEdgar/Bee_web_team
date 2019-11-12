const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class BenefitHistoryController {

// -------------------------------------
async getBenefitsHistory(req, res) {
	try {
		let allHistory = await req.app.services.benefitsHistorys.getBenefitsHistory();
		res.status(201).send(allHistory);
	} catch (error) {
		res.status(500).send(err.message);
	}
};

// -------------------------------------
	async getHistoryById(req, res) {
		const id = req.params.historyId;
			let benHistory = await req.app.services.benefitsHistorys.getHistoryById(id)
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
			let addBenHistory = await req.app.services.benefitsHistorys.addBenefitsHistory(benefitId, userId)
			.then(result => {
					if (result) {
						res.status(200).send(result);
					}
					res.status(addBenHistory.statusCode).send(result);
				})
				.catch(err => {
					res.status(err.statusCode).json({
						error: err
					})
				});
	};

// -------------------------------------
	async updateBenefitsHistory(req, res) {
		const id = req.params.id;
		const updateOps = req.body;
		let x = await req.app.services.benefitsHistorys.updateBenefitsHistory(id, updateOps)
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				throw new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
			});
	};

// -------------------------------------
	async deleteBenefitHistory(req, res) {
		const id = req.params.historyId;
		try {
			let delbenefits = await req.app.services.benefitsHistorys.deleteBenefitHistory(id);
			console.log("delbenefits:", delbenefits);
			
			let check = delbenefits.benHistory.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Benefit is deleted!",
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