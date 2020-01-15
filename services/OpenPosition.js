const { Errors, ErrorMessage } = require('../helpers/error');
const Error = new Errors();

class OpenPositionController {
	constructor(models) {
		this.models = models;
	}

	//get all Benefit Lists done!
	async getOpenPosition(res) {
		let positions = await this.models.openPosition.find()
			.select('_id title description ageLimit salary');
		if (positions.length < 1) {
			throw Error.serverError(res, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: positions.length,
			positions
		};
	};

	//get benefit by spesial ID done
	async getSpecialPosition(res,_id) {
		let position = await this.models.openPosition.findOne({
				_id
			})
			.select('_id title description ageLimit salary');
		if (!position) {
			throw Error.serverError(res, `Position ${ErrorMessage.ID_ERROR}`);
		}
		return position;
	};

	//add new position in Collection done!
	async addOpenPosition(res, title, description, gender, ageLimit, salary) {
		let sumary = await this.models.openPosition.findOne({
				$or: [{
					title
				}, {
					description
				}]
			}, {
				_id: 0
			})
			.exec()
			.then(result => {
				if (result) {
					Error.serverError(res, `${ErrorMessage.POSITION_EXIST}`);
				}else{
					const norPosition = new this.models.openPosition({
						title,
						description,
						gender,
						ageLimit,
						salary
					});
					 norPosition.save(function (err, data) {
					 	if (err) {
					 		return Error.saveError(res, `${err.message}`);
					 	}
					 	return Error.successful(res);
					 });
				}
			}).catch(err => {
				return Error.serverError(res)
			});
		return sumary	
	};

	//Update OpenPosition in Collection done
	async updateOpenPosition(res, _id, updateOps) {
		const updatePosition = await this.models.openPosition.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select('_id title description ageLimit salary');
		if (!updatePosition) {
			throw Error.serverError(res, `Open Position ${ErrorMessage.UPDATE_ERROR}`);
		}
		return updatePosition;
	};

	//delete OpenPosition by Id
	async deleteOpenPosition(res, _id) {
		let position = await this.models.openPosition.deleteOne({
			_id
		})
		if (!position) {
			throw Error.serverError(res, `Open Position ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return {
			count: position.length,
			position
		};
	}
}

module.exports = OpenPositionController;


