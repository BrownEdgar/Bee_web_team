const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Benefit = require('../models/Benefit');
const BenefitsController = require('../Controller/Benefits');
const controller = new BenefitsController();

//get all Benefits
router.get('/', controller.getAllBenefits);

//add Benefits
router.post('/', controller.addBenefits);


//get benefits by ID
router.get('/:id',  controller.getBenefit);

//update benefits
router.patch('/:id', controller.updateBenefits);
// router.patch('/:benefitId', (req, res, next) => {
// 	const id = req.params.benefitId;
// 	Benefit.updateOne( {_id:id}, { $set:{title:req.body.title} } )
// 	.exec()
// 	.then(result =>{
// 		console.log(result);
// 		res.status(200).json(result);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 		res.status(500).json({
// 			error: err
// 		})
// 	});
// });


//benefits Deleted
router.delete('/:id', controller.deleteBenefits);


module.exports = router;