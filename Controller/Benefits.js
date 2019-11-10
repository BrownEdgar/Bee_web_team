class BenefitsController {
// -------------------------------------
	async getBenefit(req, res) {
		try {
			let benefit = await req.app.services.benefits.getBenefit(req.params.id);
			res.send(benefit);
		} catch (error) {
			res.send(err.message);
		}
	};
	
// -------------------------------------
	async getAllBenefits(req, res) {
		try {
			let allbenefits = await req.app.services.benefits.getAllBenefits();
			res.status(201).send(allbenefits);
		} catch (error) {
			res.status(500).send(err.message);
		}
	};

// -------------------------------------	
	async addBenefits(req, res) {
		let {
			title,
			description
		} = req.body;
		try {
			let addBenefit = await req.app.services.benefits.addBenefits(title, description);
			res.status(200).send(addBenefit);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

// -------------------------------------
	async updateBenefits(req, res) {
		const id = req.params.id;
		const updateOps = req.body;
		let x = await req.app.services.benefits.updateBenefits(id, updateOps)
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
		try {
			let delbenefits = await req.app.services.benefits.deleteBenefits(req.params.id);
			let check = delbenefits.benefits.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Benefit is deleted!",
					benefitId: req.params.id
				})
			}
			res.status(409).json({
				message: "Benefit Id is not found!",
				BenefitId: req.params.id
			});
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
}
module.exports = BenefitsController;