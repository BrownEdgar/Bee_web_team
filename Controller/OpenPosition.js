const { ErrorHandler } = require('../middleware/ErrorHendler');
const  {Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();

class OpenPositionController {

	// ------------------------------------- done
	async getOpenPositions(req, res) {
		try {
			let allPositions = await req.app.services.openPositions.getOpenPosition();
			res.status(201).send(allPositions);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

	// ------------------------------------- done
	async getSpecialPosition(req, res) {
		const id = req.params.Id
		try {
			let position = await req.app.services.openPositions.getSpecialPosition(id);
			res.status(201).send(position);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};



	// ------------------------------------- done!	
	async addOpenPosition(req, res) {
		let { title, description, gender, ageLimit, salary} = req.body;
		try {
			let x =  await req.app.services.openPositions.addOpenPosition(res, title, description, gender, ageLimit, salary);
			console.log("x:  ", x);
			
		} catch (err) {
			Error.serverError(res, err.message);
		}
	};

	// ------------------------------------- done!
	async updateOpenPosition(req, res) {
		const id = req.params.Id;
		const updateOps = req.body;
		let x = await req.app.services.openPositions.updateOpenPosition(id, updateOps)
		x.save()
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				})
			});
	};

	// ------------------------------------- done !
	async deleteOpenPosition(req, res) {
		const id = req.params.Id;
		try {
			let delbenefits = await req.app.services.openPositions.deleteOpenPosition(id);
			
			let check = delbenefits.position.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Open Position is deleted!",
					openPositionsId: id
				})
			}
			throw new ErrorHandler(400, `Open Position ${ErrorMessage.ID_ERROR}`);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
}
module.exports = OpenPositionController;