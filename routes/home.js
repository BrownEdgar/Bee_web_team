const express = require('express');
const router = express.Router();
const { handleError, ErrorHandler } = require('../middleware/ErrorHendler')


router.get('/', (req, res) => {
	res.status(200).send("Welcome to BeeWeb home page")
})

module.exports = router;