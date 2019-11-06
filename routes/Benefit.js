const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Benefit = require('../models/Benefit');

//get all Benefits
router.get('/', function (req, res) {
	Benefit.find()
		.exec()
		.then(docs => {
			const allBenefits = {
				count: docs.length,
				benefits: docs.map(doc => {
					return {
						_id: doc._id,
						title: doc.title,
						request: {
							type: "GET",
							url: "http://localhost:4040/allbenefits/" + doc._id
						}
					}
				})
			}
			res.status(201).json(allBenefits);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//add Benefits
router.post('/', (req, res, next) => {
	const benefit = new Benefit({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title
	})
	benefit.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				createdBenefit: {
					_id: result._id,
					title: result.title
				},
				request: {
					message: 'Benefit is sorted',
					type: "GET",
					url: "http://localhost:4040/allbenefits/" + result._id
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

//get benefits by ID
router.get('/:benefitId', (req, res, next) => {
	const id = req.params.benefitId;
    Benefit.findById(id)
    .select('title _id')
		.exec()
		.then(benefit => {
			if (!benefit) {
				return res.status(404).json({
					message: 'benefit  not found'
				})
			}
			res.status(200).json({
				benefit:benefit,
				request: {
					type: "GET",
					url: "http://localhost:4040/allbenefits"
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

//update benefits
router.patch('/:benefitId', (req, res, next) => {
	const id = req.params.benefitId;
	Benefit.updateOne( {_id:id}, { $set:{title:req.body.title} } )
	.exec()
	.then(result =>{
		console.log(result);
		res.status(200).json(result);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		})
	});
});


//benefits Deleted
router.delete('/:benefitId', (req, res, next) => {
	const id = req.params.benefitId;
	Benefit.remove({_id: id})
		.exec()
		.then(result => {
			res.status(201).json({
				message: "Benefit's Deleted",
				request: {
					type: "POST",
					url: "http://localhost:4040/allbenefits/",
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