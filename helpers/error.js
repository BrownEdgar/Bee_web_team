const ErrorMessage = {
 EMAIL_EXIST: 'This Email is already exists',
 SERVER_ERROR: 'Something is Wrong, Server error',
 ID_ERROR: 'ID is not found',
 NOTFOUND_ERROR: 'Is not found',
 BENERR_FAILED: 'Benefit update failed',
 NO_DATA_ERROR: `We don't have any data yet`,
 CANDIDAT_NOTFOUND: 'Candidat is not found',
 UPDATE_ERROR: 'Update failed',
 GIFT_ERROR: `This user has already received this benefit.`,
 POSITION_EXIST: `This description or title already exists`,
 VACATION_ERROR: `You cannot ask for vacation while on vacation`,
 SUCCESSFUL: `Successful operation`,
 EXTRA_ERROR: `Some field is superfluous / extra field`,
 REGISTER_ERROR: `Some field is not present, please fill correct`
}

class Errors {
	notFoundError(res, message = ErrorMessage.NOTFOUND_ERROR) {
		res.status(404).json({
			message
		})
	}
	conflictError(res, message = "Something is Wrong") {
		res.status(409).json({
			message
		})
	}
	registerError(res, message = ErrorMessage.REGISTER_ERROR) {
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


export {
	ErrorMessage,
	Errors
}