const express = require('express');
const router = express.Router();
const BenefitsController = require('../Controller/Benefits');
const controller = new BenefitsController();
const checkAuth = require('../middleware/checkLogin');

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


module.exports = router;