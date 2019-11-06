const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const OpenPosition = require('../models/OpenPosition');

//get all OpenPositions
router.get('/', function (req, res) {
	OpenPosition.find()
		.exec()
		.then(docs => {
			const allOpenPositions = {
				count: docs.length,
				OpenPositions: docs.map(doc => {
					return {
						_id: doc._id,
						title: doc.title,
						description: doc.description,
						gender: doc.gender,
						ageLimit: doc.age,
						salary: doc.salary,
						request: {
							type: "GET",
							url: "http://localhost:4040/allopenpositions/" + doc._id
						}
					}
				})
			}
			res.status(201).json(allOpenPositions);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//add OpenPositions
router.post('/', (req, res, next) => {
//check deccription and title
OpenPosition.find({$or: [ {title:req.body.title}, {description: req.body.description} ]},{_id:0})
    .exec()
	.then(result =>{
		if (result.length >= 1) {
			return res.status(409).json({
				message: "This description or title already exists"
			});
		} else {
const openPosition = new OpenPosition({
	_id: new mongoose.Types.ObjectId(),
	title: req.body.title,
	description: req.body.description,
	gender: req.body.gender,
	ageLimit: req.body.age,
	salary: req.body.salary,
})
openPosition.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
			createdOpenPosition: {
				_id: result._id,
				title: result.title,
				description: result.description,
				gender: result.gender,
				ageLimit: result.age,
				salary: result.salary
			},
			request: {
				message: 'OpenPosition is sorted',
				type: "GET",
				url: `http://localhost:4040/allopenpositions/ + ${result._id}`
			}
		});
	})
		}
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		})
	});	
});

//get OpenPositions by ID
router.get('/:openPositionId', (req, res, next) => {
	const id = req.params.openPositionId;
	OpenPosition.findById(id)
		.select('title description _id salary')
		.exec()
		.then(openPosition => {
			if (!openPosition) {
				return res.status(404).json({
					message: 'OpenPositions is  not found',
					back: `http://localhost:4040/allopenpositions`
				})
			}
			res.status(200).json({
				OpenPosition: openPosition,
				request: {
					type: "GET",
					url: `http://localhost:4040/allopenpositions`
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

//update OpenPositions
router.patch('/:OpenPositionId', async (req, res, next) => {
	const id = req.params.OpenPositionId;
	const updateOps = {};
	for (const ops of req.body) {
		console.log("ops.propName", ops.propName);
		
		await OpenPosition.findOne({ [ops.propName]:{$exists:true} })
    .exec()
    .then(user => {
		if (user) {
			updateOps[ops.propName] = ops.value;
		}else{
			res.json({
				error: "invalid propName Value",
				value: ops.propName
			});
		}
	 })
}
	OpenPosition.updateOne({
			_id: id
		}, {
			$set: updateOps
		})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'OpenPosition updated',
				request: {
					type: 'GET',
					url: `http://localhost:4040/allopenpositions/ + ${id}`
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});


//OpenPositions Deleted
router.delete('/:OpenPositionId', (req, res, next) => {
	const id = req.params.OpenPositionId;
	OpenPosition.deleteOne({
			_id: id
		})
		.exec()
		.then(result => {
			res.status(201).json({
				message: "OpenPosition's Deleted",
				request: {
					type: "POST",
					url: "http://localhost:4040/allopenpositions/",
					body: {
						_id: "ID",
						title: "String",
						description: "String",
						gender: "String",
						ageLimit: "Number",
						salary: "Number"
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