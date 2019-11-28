import { ErrorHandler } from '../middleware/ErrorHendler';
import { ErrorMessage, Errors } from '../helpers/error';

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
	async addOpenPosition(title, description, gender, ageLimit, salary)  {
		let sumary = this.models.openPosition.find(
			{$or: [{title}, {description}]}, {_id: 0})
			.exec()
			.then(result => {
				if (result.length >= 1) {
					throw new ErrorHandler(500, `${ErrorMessage.POSITION_EXIST}`);
				} else {
	const norPosition = new this.models.openPosition({
		title,
		description,
		gender,
		ageLimit,
		salary
	});
	 norPosition.save();
	return ({
		status: 201,
		message: "Open Position is created"
	})
}
			}).catch(err => {
		 		throw new ErrorHandler(500, `${ErrorMessage.SERVER_ERROR}`);
				 });
		return sumary
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

export default OpenPositionController;