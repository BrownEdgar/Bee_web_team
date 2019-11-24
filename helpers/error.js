const ErrorMessage = {
 EMAIL_EXIST: 'This Email is already exists',
 SERVER_ERROR: 'Something is Wrong, Server error',
 ID_ERROR: 'ID is not found',
 ID_LENGTH_ERROR: 'ID is not found, it is too short',
 NOTFOUND_ERROR: 'Is not found',
 BENERR_FAILED: 'Benefit update failed',
 NO_DATA_ERROR: `We don't have any data yet`,
 CANDIDAT_NOTFOUND: 'Candidat is not found',
 CANDIDAT_DELETED: 'Candidat is alredy deleted!',
 UPDATE_ERROR: 'Update failed',
 GIFT_ERROR: `This user has already received this benefit.`,
 POSITION_EXIST: `This description or title already exists`,
 VACATION_ERROR: `You cannot ask for vacation while on vacation`,
 SUCCESSFUL: `Successful operation`,
 EXTRA_ERROR: `Some field is superfluous / extra field`,
 REGISTER_ERROR: `Some field is not present, please fill correct`
}

class Errors {
	successful(res, message = ErrorMessage.SUCCESSFUL) {
		res.status(201).json({
			message
		})
	}

	idLengthError(res, message = ErrorMessage.ID_LENGTH_ERROR) {
		res.status(409).json({
			message
		})
	}
	notFoundError(res, message = ErrorMessage.NOTFOUND_ERROR) {
		res.status(404).json({
			message
		})
	}

	noDataError(res, message = ErrorMessage.NO_DATA_ERROR) {
		res.status(500).json({
			message
		})
	}
	conflictError(res, message = "Something is Wrong") {
		res.status(409).json({
			message
		})
	}
	candidatDelError(res, message = ErrorMessage.CANDIDAT_DELETED) {
		res.status(409).json({
			message
		})
	}
	registerError(res, message = ErrorMessage.REGISTER_ERROR) {
		res.status(412).json({
			message
		})
	}
	saveError(res, message = ErrorMessage.REGISTER_ERROR) {
		res.status(412).json({
			message
		})
	}
	serverError(res, message = ErrorMessage.SERVER_ERROR) {
		res.status(500).json({
			message
		})
	}
}


module.exports = {
	ErrorMessage,
	Errors
}