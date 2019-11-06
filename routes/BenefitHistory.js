const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const BenefitHistory = require('../models/BenefitsHistory');

//get all BenefitHistorys
router.get('/', function (req, res) {
	BenefitHistory.find()
		.exec()
		.then(docs => {
			const allBenefitHistorys = {
				count: docs.length,
				BenefitHistorys: docs.map(doc => {
					return {
						benefitId: doc.benefitId,
						userId: doc.userId,
						givesDate: doc.date,
						request: {
							type: "GET",
							url: "http://localhost:4040/allbenefitshistory/" + doc._id,
							userUrl: "http://localhost:4040/register/" + doc.userId
						}
					}
				})
			}
			res.status(201).json(allBenefitHistorys);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//add BenefitHistorys
router.post('/', (req, res, next) => {    
	const newBenHistory = new BenefitHistory({
		_id: new mongoose.Types.ObjectId(),
		benefitId: req.body.benefitId,
		userId: req.body.userId,
		date: req.body.date,
	})
	newBenHistory.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				createdBenefitHistory: {
					_id: result._id,
					benefitId: result.benefitId,
					userId: result.userId,
					givesDate: result.date,
				},
				request: {
					message: 'BenefitHistory is sorted',
					type: "GET",
					url: "http://localhost:4040/allBenefitHistorys/" + result._id
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});
});

//get BenefitHistorys by ID
router.get('/:historyId', (req, res, next) => {
	const id = req.params.historyId;
    BenefitHistory.findById(id)
		.exec()
		.then(historyRresults => {
			if (!historyRresults) {
				return res.status(404).json({
					message: 'BenefitHistory  not found'
				})
			}
			res.status(200).json({
				historyRresults:historyRresults,
				request: {
					type: "GET",
					url: "http://localhost:4040/allBenefitHistorys"
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});
});



//BenefitHistorys Deleted
router.delete('/:historyId', (req, res, next) => {
	const id = req.params.historyId;
	BenefitHistory.deleteOne({_id: id})
		.exec()
		.then(result => {
			res.status(201).json({
				message: "BenefitHistory's Deleted",
				request: {
					type: "POST",
					url: "http://localhost:4040/allBenefitHistorys/",
					body: {
						_id: "ID",
						title: "String"
					}
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});
});


module.exports = router;