const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const OpenPositionController = require('../Controller/OpenPosition');
const controller = new OpenPositionController();

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
