const {
	Errors,
	ErrorMessage
} = require('../helpers/error');
const Error = new Errors();

class RatingsList {
	constructor(models) {
		this.models = models;
	}

	//get all Ticket List  done
	async getRatings(res) {
		let ratings = await this.models.ratingsList.find();
		if (ratings.length < 1) {
			throw Error.conflictError(res, ErrorMessage.NO_DATA_ERROR);
		}
		return res.status(201).json({
			caunt:ratings.length,
			ratings
		});
	};

	//get Ticket Lists by spesial ID
	async getratingsListById(_id) {
		let ratingsListId = await this.models.ratingsList.findOne({
				_id
			}, {
				_id: 0
			})
			.populate("userId", 'lastname')
			.select(`userId dateStart dateEnd`)
			.exec();
		console.log(ratingsListId);
		if (!ratingsListId) {
			throw Error.conflictError(res, `Ticket List ${ErrorMessage.ID_ERROR}`);
		}
		return ratingsListId;
	};

	//add new Ticket Lists in Collection
	async addRating(res, userId, adminId, rating) {
		let sumary = await this.models.ratingsList.findOne({
				userId
			})
			.exec()
			.then(result => {
				if (result) {
					return Error.saveError(res, 'вы не админ');
				}else{
					const norratingsList =  new this.models.ratingsList({
						userId,
						adminId,
						rating
					});
					norratingsList.save(function (err) {
						if (err) {
							Error.serverError(res, `${err.message}`);
						}
					});
					return Error.ticketSaveSuccessfuly(res, `${norratingsList}`)
				}
			}).catch(err => {
				 Error.serverError(res, `${err.message}`);
			});
	};

	//Update Ticket Lists in Collection
	async updateratingsList(_id, updateOps) {
		const updateratingsList = await this.models.ratingsList.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select(`userId dateStart dateEnd`)
		if (!updateratingsList) {
			return Error.conflictError(409, `Ticket ListError ${Message.UPDATE_ERROR}`);
		}
		return Error.successful(res, updateratingsList);
	}

	//delete Ticket Lists by Id
	async deleteratingsList(_id) {
		let ratingsList = await this.models.ratingsList.deleteOne({
			_id
		})
		if (!ratingsList) {
			return Error.serverError(res, `Ticket List ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return {
			count: ratingsList.length,
			ratingsList
		};
	}
}

module.exports = RatingsList;