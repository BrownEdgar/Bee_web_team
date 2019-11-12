const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const OpenPositionController = require('../Controller/OpenPosition');
const controller = new OpenPositionController();

//get all OpenPositions
router.get('/', checkAuth, controller.getAllOpenPosition);

//add OpenPositions
router.post('/', checkAuth, controller.addOpenPosition);

//get OpenPositions by ID
router.get('/:openPositionId', checkAuth, controller.getSpecialPosition);

//update OpenPositions
router.patch('/:openPositionId', checkAuth, controller.updateOpenPosition);

//OpenPositions Deleted
router.delete('/:openPositionId', checkAuth, controller.deleteOpenPosition);



module.exports = router;