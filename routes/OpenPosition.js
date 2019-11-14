const express = require('express');
const router = express.Router();
const OpenPositionController = require('../Controller/OpenPosition');
const controller = new OpenPositionController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();

//get all OpenPositions
router.get('/', controller.getOpenPosition);

//add OpenPositions
router.post('/', controller.addOpenPosition);

//get OpenPositions by ID
router.get('/:openPositionId', controller.getSpecialPosition);

//update OpenPositions
router.patch('/:openPositionId', controller.updateOpenPosition);

//OpenPositions Deleted
router.delete('/:openPositionId', controller.deleteOpenPosition);



module.exports = router;
