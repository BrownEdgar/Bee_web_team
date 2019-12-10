const express = require('express');
const router = express.Router();
const BenefitsController = require('../Controller/Benefits');
const controller = new BenefitsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();
const authMiddleware = require('../middleware/checkLogin');

//get all Benefits
router.get('/', authMiddleware, controller.getBenefits);

//add Benefits
router.post('/',  controller.addBenefits);

//get benefits by ID
router.get('/:id',    controller.getBenefit);

//update benefits
router.patch('/:id',   controller.updateBenefits);

//benefits Deleted
router.delete('/:id',   controller.deleteBenefits);


module.exports = router;