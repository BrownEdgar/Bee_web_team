import express from 'express';
const router = express.Router();
import OpenPositionController from '../Controller/OpenPosition';
const controller = new OpenPositionController();
import loginValidator from '../Validate/loginValidator';
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



export default router;
