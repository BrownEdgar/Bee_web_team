const express = require('express');
const router = express.Router();
const BenefitsController = require('../Controller/Benefits');
const controller = new BenefitsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();

//get all Benefits
router.get('/',  controller.getBenefits);

//add Benefits
router.post('/',   controller.addBenefits);


//get benefits by ID
router.get('/:id',    controller.getBenefit);

//update benefits
router.patch('/:id',   controller.updateBenefits);

//benefits Deleted
router.delete('/:id',   controller.deleteBenefits);


export default router;