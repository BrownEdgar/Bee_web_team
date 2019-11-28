const {
	ErrorHandler
} = require('../middleware/ErrorHendler');
const {
	Errors,
	ErrorMessage
} = require('../helpers/error');
const Error = new Errors();

class OpenPositionController {
	constructor(models) {
		this.models = models;
	}

	//get all Benefit Lists done!
	async getOpenPosition() {
		let positions = await this.models.openPosition.find()
			.select('_id title description ageLimit salary');
		if (positions.length < 1) {
			throw new ErrorHandler(500, ErrorMessage.NO_DATA_ERROR);
		}
		return {
			count: positions.length,
			positions
		};
	};

	//get benefit by spesial ID done
	async getSpecialPosition(_id) {
		let position = await this.models.openPosition.findOne({
				_id
			})
			.select('_id title description ageLimit salary');
		if (!position) {
			throw new ErrorHandler(500, `Position ${ErrorMessage.ID_ERROR}`);
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
				}
			}).catch(err => {
				throw new ErrorHandler(500, err);
			});
		const norPosition = new this.models.openPosition({
			title,
			description,
			gender,
			ageLimit,
			salary
		});
		let x = await norPosition.save(function (err, data) {
			if (err) {
				return Error.saveError(res, `${err.message}`);
			}
			return data
		});
		console.log("4444");
		Error.successful(res);
	};

	//Update OpenPosition in Collection done
	async updateOpenPosition(_id, updateOps) {
		const updatePosition = await this.models.openPosition.findByIdAndUpdate({
				_id
			}, {
				$set: updateOps
			}, {
				new: true
			})
			.select('_id title description ageLimit salary');
		if (!updatePosition) {
			throw new ErrorHandler(500, `Open Position ${ErrorMessage.UPDATE_ERROR}`);
		}
		return updatePosition;
	};

	//delete OpenPosition by Id
	async deleteOpenPosition(_id) {
		let position = await this.models.openPosition.deleteOne({
			_id
		})
		if (!position) {
			throw new ErrorHandler(500, `Open Position ${ErrorMessage.NOTFOUND_ERROR}`);
		}
		return {
			count: position.length,
			position
		};
	}
}

module.exports = OpenPositionController;