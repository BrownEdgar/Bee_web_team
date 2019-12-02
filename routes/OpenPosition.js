const express = require('express');
const router = express.Router();
const OpenPositionController = require('../Controller/OpenPosition');
const controller = new OpenPositionController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();

//get all OpenPositions
router.get('/', controller.getOpenPositions);

//add OpenPositions
router.post('/',  checkAuth.checkOpenPositionAdds, controller.addOpenPosition);

//get OpenPositions by ID
router.get('/:Id',checkAuth.isIdCorrect, controller.getSpecialPosition);

//update OpenPositions
router.patch('/:Id', checkAuth.isIdCorrect, controller.updateOpenPosition);

//OpenPositions Deleted
router.delete('/:Id',checkAuth.isIdCorrect,  controller.deleteOpenPosition);



module.exports = router;
