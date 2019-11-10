const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const OpenPosition = require('../models/OpenPosition');
const OpenPositionController = require('../Controller/OpenPosition');
const controller = new OpenPositionController();

//get all OpenPositions
router.get('/', controller.getAllOpenPosition);

//add OpenPositions
router.post('/', controller.addOpenPosition);

//get OpenPositions by ID
router.post('/:openPositionId', controller.getSpecialPosition);

//update OpenPositions
router.patch('/:openPositionId', controller.updateOpenPosition);

//OpenPositions Deleted
router.delete('/:openPositionId', controller.deleteOpenPosition);



module.exports = router;