const {
	Errors,
	ErrorMessage
} = require('../helpers/error');
const Error = new Errors();

class TicketListsController {
	constructor(models) {
		this.models = models;
	}

	//get all Ticket List  done
	async getTicketLists() {
		let ticketList = await this.models.ticketList.find().sort({
			dateStart: 1
		})
		if (ticketList.length < 1) {
			throw Error.conflictError(res, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: ticketList.length,
			ticketList
		};
	};

	//get Ticket Lists by spesial ID
	async getTicketListById(_id) {
		let ticketListId = await this.models.ticketList.findOne({
				_id
			}, {
				_id: 0
			})
			.populate("userId", 'lastname')
			.select(`userId dateStart dateEnd`)
			.exec();
		console.log(ticketListId);
		if (!ticketListId) {
			throw Error.conflictError(res, `Ticket List ${ErrorMessage.ID_ERROR}`);
		}
		return ticketListId;
	};

	//add new Ticket Lists in Collection
	async addTicketList(res, userId, dateStart, dateEnd) {
		if (dateStart >= dateEnd) {
			return Error.ticketSaveError(res);
		}
		let sumary = await this.models.ticketList.findOne({
				userId
			})
			.exec()
			.then(result => {
				if (result) {
					return Error.saveError(res, ErrorMessage.VACATION_ERROR);
				}else{
					const norTicketList =  new this.models.ticketList({
						userId,
						dateStart,
						dateEnd
					});
					norTicketList.save(function (err) {
						if (err) {
							Error.serverError(res, `${err.message}`);
						}
					});
					console.log('norTicketList', norTicketList);
					
					return Error.ticketSaveSuccessfuly(res, `${norTicketList}`)
				}
			}).catch(err => {
				 Error.serverError(res, `${err.message}`);
			});
	};

	//Update Ticket Lists in Collection
	async updateTicketList(_id, updateOps) {
		const updateTicketList = await this.models.ticketList.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select(`userId dateStart dateEnd`)
		if (!updateTicketList) {
			return Error.conflictError(409, `Ticket ListError ${Message.UPDATE_ERROR}`);
		}
		return Error.successful(res, updateTicketList);
	}

	//delete Ticket Lists by Id
	async deleteTicketList(_id) {
		let ticketList = await this.models.ticketList.deleteOne({
			_id
		})
		if (!ticketList) {
			return Error.serverError(res, `Ticket List ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return {
			count: ticketList.length,
			ticketList
		};
	}
}

module.exports = TicketListsController;