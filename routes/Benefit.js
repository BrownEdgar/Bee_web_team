const express = require('express');
const router = express.Router();
const BenefitsController = require('../Controller/Benefits');
const controller = new BenefitsController();
const checkAuth = require('../middleware/checkLogin');

//get all Benefits
router.get('/', checkAuth, controller.getBenefits);

//add Benefits
router.post('/', checkAuth,  controller.addBenefits);


//get benefits by ID
router.get('/:id', checkAuth,   controller.getBenefit);

//update benefits
router.patch('/:id', checkAuth,  controller.updateBenefits);

//benefits Deleted
router.delete('/:id', checkAuth,  controller.deleteBenefits);


module.exports = router;