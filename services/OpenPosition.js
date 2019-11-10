class OpenPositionController {
	constructor(models) {
		this.models = models;
	}
	
	//get all Benefit Lists done!
	async getAllOpenPosition() {
		let positions = await this.models.openPosition.find()
			.select('_id title description ageLimit salary');
		if (positions.length < 1) {
			throw new Error('!Open position is not found')
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
			throw new Error("Position not found");
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
					const message = {
						status: 409,
						message:"This description or title already exists"
					}
					return message;
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
		 		return ({
		 			status: 500,
		 			message: "Sameting is Wrong, Server error"
		 		})
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
		throw new Error('Open Position  update failed');
	}
	return updatePosition;
	};

	//delete OpenPosition by Id
	async deleteOpenPosition(_id) {
		let position = await this.models.openPosition.deleteOne({
			_id
		})
		if (!position) {
			return new Error('Open Position is  not found')
		}
		return {
			count: position.length,
			position
		};
	}
}

module.exports = OpenPositionController;