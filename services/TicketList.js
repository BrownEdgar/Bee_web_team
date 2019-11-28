import { ErrorHandler } from '../middleware/ErrorHendler';
import { ErrorMessage, Errors } from '../helpers/error';

class TicketListsController {
	constructor(models) {
		this.models = models;
	}

	//get all Ticket List  done
	async getTicketLists() {
		let ticketList = await this.models.ticketList.find().sort({dateStart:1})
		if (ticketList.length < 1) {
			 throw new ErrorHandler(409, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: ticketList.length,
			ticketList
		};
	};

	//get Ticket Lists by spesial ID
	async getTicketListById(_id) {
		let ticketListId = await this.models.ticketList.findOne({_id},{_id:0})
		.select(`userId dateStart dateEnd`)
		if (!ticketListId) {
			 throw new ErrorHandler(409, `Ticket List ${ErrorMessage.ID_ERROR}`);
		}
		return ticketListId;
	};

	//add new Ticket Lists in Collection
	async addTicketList(userId, dateStart, dateEnd) {
		let sumary =this.models.ticketList.find({
				 userId
			})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					return new ErrorHandler(409, ErrorMessage.VACATION_ERROR);
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
				return new ErrorHandler(500, ErrorMessage.SERVER_ERROR);
			});
			return sumary;
	};

	//Update Ticket Lists in Collection
	async updateTicketList(_id, updateOps) {
		const updateTicketList = await this.models.ticketList.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, 
			{
				new: true
			})
			.select(`userId dateStart dateEnd`)
		if (!updateTicketList) {
			return new ErrorHandler(409, `Ticket ListError ${Message.UPDATE_ERROR}`);
		}
		return new ErrorHandler(200, updateTicketList);
	}

	//delete Ticket Lists by Id
	async deleteTicketList(_id) {
		let ticketList = await this.models.ticketList.deleteOne({
			_id
		})
		if (!ticketList) {
			return new ErrorHandler(500, `Ticket List ${ErrorMessage.NOTFOUND_ERROR}`);
			 
		}
		return {
			count: ticketList.length,
			ticketList
		};
	}
}

export default TicketListsController;