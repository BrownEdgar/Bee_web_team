import express from 'express';
const router = express.Router();
import BenefitsController from '../Controller/Benefits';
const controller = new BenefitsController();
import loginValidator from '../Validate/loginValidator';
const checkAuth = new loginValidator();

//get all Benefits
router.get('/', checkAuth.isLogin, controller.getBenefits);

//add Benefits
router.post('/',  controller.addBenefits);


//get benefits by ID
router.get('/:id',    controller.getBenefit);

//update benefits
router.patch('/:id',   controller.updateBenefits);

//benefits Deleted
router.delete('/:id',   controller.deleteBenefits);


export default router;