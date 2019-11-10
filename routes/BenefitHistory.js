const express = require('express');
const router = express.Router();
const BenefitHistoryController = require('../Controller/BenefitsHistory');
const controller = new BenefitHistoryController();


//no Update Url => "patch"

//get all BenefitHistorys
router.get('/', controller.getAllBenefitsHistory);

//add BenefitHistorys
router.post('/', controller.addBenefitsHistory);

//get BenefitHistorys by ID 
router.get('/:historyId', controller.getHistoryById);

//BenefitHistorys Deleted
router.delete('/:historyId', controller.deleteBenefitHistory);

module.exports = router;