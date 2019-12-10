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
 LOGIN_ERROR: 'Login failed',
 GIFT_ERROR: `This user has already received this benefit.`,
 POSITION_EXIST: `This description or title already exists`,
 VACATION_ERROR: `You cannot ask for vacation while on vacation`,
 SUCCESSFUL: `Successful operation`,
 EXTRA_ERROR: `Some field is superfluous / extra field`,
 TIKCKET_LIST_SUCCESSFUL: `Thanck you, Ticket List is pending`,
 TIKCKET_LIST_DATA_ERROR: `dateStart can not be equal  or more than dateEnd.`,
 REGISTER_ERROR: `Some field is not present, please fill correct`,
 REFRESH_TOKEN_ERROR: `Token type is not 'refresh`,
}

class Errors {
	successful(res, message = ErrorMessage.SUCCESSFUL) {
		res.status(201).json(message)
	}
	
	successfulToken(res, user, Tokens) {
		res.status(201).json({
			user,
			Tokens
		})
	}

	idLengthError(res, message = ErrorMessage.ID_LENGTH_ERROR) {
		res.status(409).json({
			message
		})
	}
	updateError(res, message = ErrorMessage.UPDATE_ERROR) {
		res.status(400).json({
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
	loginError(res, kind, message = ErrorMessage.LOGIN_ERROR) {
		res.status(401).json({
			message,
			kind
		})
	}

	saveError(res, message = ErrorMessage.REGISTER_ERROR) {
		res.status(412).json(message)
	}

	ticketSaveError(res, message = ErrorMessage.TIKCKET_LIST_DATA_ERROR) {
		res.status(412).json({
			message
		})
	}
	ticketSaveSuccessfuly(res, ticket, message = ErrorMessage.TIKCKET_LIST_SUCCESSFUL) {
		res.status(412).json({
			message,
			ticket
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