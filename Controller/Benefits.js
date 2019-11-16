const { ErrorHandler } = require('../middleware/ErrorHendler');
const { ErrorMessage, Errors } = require('../helpers/error');
const Error = new Errors();

class BenefitsController {
// -------------------------------------
	async getBenefit(req, res) {
		const id = req.params.id;
		try {
			let benefit = await req.app.services.benefits.getBenefit(res, id);
			res.status(200).send(benefit);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
	
// -------------------------------------
	async getBenefits(req, res) {
		try {
			let allbenefits = await req.app.services.benefits.getBenefits(res)
			res.status(201).send(allbenefits);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

// -------------------------------------	
	async addBenefits(req, res) {
		let {
			title,
			description
		} = req.body;
		try {
			let addBenefit = await req.app.services.benefits.addBenefits(res, title, description);
			res.status(200).send(addBenefit);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

// -------------------------------------
	async updateBenefits(req, res) {
		const id = req.params.id;
		const updateOps = req.body;
		let x = await req.app.services.benefits.updateBenefits(res, id, updateOps)
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				})
			});
	};

// -------------------------------------
	async deleteBenefits(req, res) {
		const _id = req.params.id;
		try {
			let delbenefits = await req.app.services.benefits.deleteBenefit(_id);
				return res.status(201).json({
					message: "Benefit is deleted!",
					benefitId: _id
				})
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
}
module.exports = BenefitsController;