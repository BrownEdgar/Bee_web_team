import express from 'express';
const router = express.Router();
import BenefitHistoryController from '../Controller/BenefitsHistory';
const controller = new BenefitHistoryController();
import loginValidator from '../Validate/loginValidator';
const checkAuth = new loginValidator();


//no Update Url => "patch"

//get all BenefitHistorys
router.get('/', controller.getBenefitsHistory);

//add BenefitHistorys
router.post('/', controller.addBenefitsHistory);

//get BenefitHistorys by ID 
router.get('/:historyId', controller.getHistoryById);

//BenefitHistorys Deleted
router.delete('/:historyId', controller.deleteBenefitHistory);

export default router;