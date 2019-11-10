const { ErrorHandler } = require('../middleware/ErrorHendler');
const  ErrorMessage  = require('../helpers/error');

class TicketListsController {
	constructor(models) {
		this.models = models;
	}

	//get all Ticket List Lists done
	async getAllTicketLists() {
		let ticketList = await this.models.ticketList.find().sort({dateStart:1})
		if (ticketList.length < 1) {
			throw new Error('Ticket Lists is not found')
		}
		return {
			count: ticketList.length,
			ticketList
		};
	};

	//get Ticket Lists History by spesial ID
	async getHistoryById(_id) {
		let ticketListId = await this.models.ticketList.findOne({
			_id
		})
		if (!ticketListId) {
			throw new Error("Ticket Lists ID is not found");
		}
		return ticketListId;
	};

	//add new Ticket Lists History in Collection
	async addTicketList(userId, dateStart, dateEnd) {
		let sumary =this.models.ticketList.find({
				 userId
			})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					const message = {
						status: 409,
						message: "You cannot ask for vacation while on vacation"
					}
					return message;
				} else {
					const norTicketList = new this.models.ticketList({
						userId,
						dateStart, 
						dateEnd
					});
					norTicketList.save();
					return ({
						status: 201,
						message: "Thanck you, Ticket List  is pending"
					})
				}
			}).catch(err => {
				return ({
					status: 500,
					message: "Sameting is Wrong, Server error"
				})
			});
			return sumary;
	};

	//Update Ticket Lists History in Collection
	async updateTicketLists(_id, updateOps) {

		const updateTicketList = await this.models.ticketList.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select('title description _id');
		if (!updateTicketList) {
			throw new Error('Ticket List update failed');
		}
		return updateTicketList;
	};

	//delete Ticket Lists History by Id
	async deleteTicketListHistory(_id) {
		let ticketList = await this.models.ticketList.deleteOne({
			_id
		})
		if (!ticketList) {
			return new Error('Ticket List History is not found')
		}
		return {
			count: ticketList.length,
			ticketList
		};
	}
}

module.exports = TicketListsController;