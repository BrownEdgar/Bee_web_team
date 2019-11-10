const express = require('express');
const router = express.Router();
const { handleError, ErrorHandler } = require('../middleware/ErrorHendler')


router.get('/error', (req, res) => {
	throw new ErrorHandler(500, 'Internal server error');
})

module.exports = router;