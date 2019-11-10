const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class TicketListsController {

// ------------------------------------- done
async getAllTicketLists(req, res) {
	try {
		let allHistory = await req.app.services.ticketLists.getAllTicketLists();
		res.status(201).send(allHistory);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

// -------------------------------------
	async getHistoryById(req, res) {
		const id = req.params.historyId;
		try {
			let ticketList = await req.app.services.ticketLists.getHistoryById(id);
			res.send(ticketList);
		} catch (error) {
			res.send(error.message);
		}
	};
	
// ------------------------------------- done!
	async addTicketList(req, res) {
		let { userId, dateStart, dateEnd } = req.body;
		try {
			let newTicketList = await req.app.services.ticketLists.addTicketList( userId, dateStart, dateEnd );
			res.status(newTicketList.status).send(newTicketList);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

// -------------------------------------
	async updateBenefits(req, res) {
		const id = req.params.id;
		const updateOps = req.body;
		let x = await req.app.services.ticketLists.updateBenefits(id, updateOps)
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
	async deleteBenefitHistory(req, res) {
		const id = req.params.historyId;
		try {
			let delbenefits = await req.app.services.ticketLists.deleteBenefitHistory(id);
			console.log("delbenefits:", delbenefits);
			
			let check = delbenefits.benHistory.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Benefit is deleted!",
					benefitId: id
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
module.exports = TicketListsController;