const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const BenefitHistoryController = require('../Controller/BenefitsHistory');
const controller = new BenefitHistoryController();


//no Update Url => "patch"

//get all BenefitHistorys
router.get('/', checkAuth, controller.getAllBenefitsHistory);

//add BenefitHistorys
router.post('/', checkAuth, controller.addBenefitsHistory);

//get BenefitHistorys by ID 
router.get('/:historyId', checkAuth, controller.getHistoryById);

//BenefitHistorys Deleted
router.delete('/:historyId', checkAuth, controller.deleteBenefitHistory);

module.exports = router;