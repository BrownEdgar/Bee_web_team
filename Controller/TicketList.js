const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class TicketListsController {

// ------------------------------------- done
async getTicketLists(req, res) {
	try {
		let allHistory = await req.app.services.ticketLists.getTicketLists();
		res.status(201).send(allHistory);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

// ------------------------------------- done
	async getTicketListById(req, res) {
		const id = req.params.ticketId;
		try {
			let ticketList = await req.app.services.ticketLists.getTicketListById(id);
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
			res.status(newTicketList.statusCode).send(newTicketList);
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

// -------------------------------------
	async updateTicketList(req, res) {
		const id = req.params.ticketId;
		const updateOps = req.body;
		let x = await req.app.services.ticketLists.updateTicketList(id, updateOps)
			.then(result => {
				res.status(result.statusCode).send(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				})
			});
	};

// -------------------------------------
	async deleteTicketList(req, res) {
		const id = req.params.ticketId;
		try {
			let delbenefits = await req.app.services.ticketLists.deleteTicketList(id);
			let check = delbenefits.ticketList.deletedCount;
			if (check) {
				return res.status(201).json({
					message: "Ticket Lists is deleted!",
					benefitId: id
				})
			}
			throw new ErrorHandler(409, `Ticket List ${ErrorMessage.ID_ERROR}`);
		} catch (error) {
			res.status(500).send(error.message);
		}
	};
}
module.exports = TicketListsController;