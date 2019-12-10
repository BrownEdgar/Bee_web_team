const { ErrorHandler } = require('../middleware/ErrorHendler');
const  { ErrorMessage, Errors } = require('../helpers/error');
const Error = new Errors();

class RatingsLists {

// ------------------------------------- done
async getRatings(req, res) {
	try {
		 await req.app.services.ratingsList.getRatings(res);
	} catch (error) {
		Error.serverError(res, `${error}`);
	}
};

// ------------------------------------- done
	async getTicketListById(req, res) {
		const id = req.params.ticketId;
		try {
			let ticketList = await req.app.services.ratingsList.getTicketListById(id);
			res.send(ticketList);
		} catch (error) {
			res.send(error.message);
		}
	};
	
// ------------------------------------- done!
	async addRating(req, res) {
		let { userId, rating } = req.body;
		let adminId =  req.userData.userId;
		try {
			await req.app.services.ratingsList.addRating( res, userId, adminId, rating );
		} catch (err) {
			res.status(500).send(err.message);
		}
	};

// -------------------------------------
	async updateTicketList(req, res) {
		const id = req.params.ticketId;
		const updateOps = req.body;
		let x = await req.app.services.ratingsList.updateTicketList(id, updateOps)
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
			let delbenefits = await req.app.services.ratingsList.deleteTicketList(id);
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
module.exports = RatingsLists;