const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Candidat = require('../models/Candidats');
const OpenPosition = require('../models/OpenPosition');

//get all Candidats
router.get('/', function (req, res) {
	Candidat.find()
		.populate('openPosId', '_id')
		.exec()
		.then(docs => {
			const allCandidats = {
				count: docs.length,
				Candidats: docs.map(doc => {
					return {
						_id: doc._id,
						openPosId: doc.openPosId,
						name: doc.name,
						surname: doc.surname,
						email: doc.email,
						age: doc.age,
						gender: doc.gender,
						request: {
							type: "GET",
							url: "http://localhost:4040/allCandidats/" + doc._id
						}
					}
				})
			}
			res.status(201).json(allCandidats);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//add Candidats
router.post('/', async (req, res, next) => {
const id = req.body.openPosId;
console.log(id);

await OpenPosition.findById(id)
.then(result =>{
	if (result) {
		const candidat = new Candidat({
			_id: new mongoose.Types.ObjectId(),
			openPosId: req.body.openPosId,
			name: req.body.name,
			surname: req.body.surname,
			email: req.body.email,
			age: req.body.age,
			gender: req.body.gender
		})
			candidat.save()
				.then(result => {
					console.log(result);
					res.status(201).json({
						createdCandidat: {
							_id: result._id,
							openPosId: {_id:result.openPosId },
							name: result.name,
							surname: result.surname,
							email: result.email,
							age: result.age,
							gender: result.gender
						},
						request: {
							message: 'Candidat is sorted',
							type: "GET",
							url: "http://localhost:4040/allCandidats/" + result._id
						}
					});
				})
				
	}else{
		return res.status(409).json({
			message: 'Open Position invalid ID, please check it',
			url: "http://localhost:4040/allopenpositions"
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

//get Candidats by ID
router.get('/:CandidatId', (req, res, next) => {
	const id = req.params.CandidatId;
	Candidat.findById(id)
		.select('name surname email age _id')
		.exec()
		.then(Candidat => {
			if (!Candidat) {
				return res.status(404).json({
					message: 'Candidat  not found'
				})
			}
			res.status(200).json({
				Candidat: Candidat,
				request: {
					message:"all candidats list",
					type: "GET",
					url: "http://localhost:4040/allCandidats"
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

//update Candidats
router.patch('/:CandidatId', async (req, res, next) => {
		const id = req.params.CandidatId;
		const updateOps = {};
		for (const ops of req.body) {
			console.log("ops.propName", ops.propName);

			await Candidat.findOne({
					[ops.propName]: {
						$exists: true
					}
				})
				.exec()
				.then(user => {
					if (user) {
						updateOps[ops.propName] = ops.value;
					} else {
						res.json({
							error: "invalid propName Value",
							value: ops.propName
						});
					}
				})
		}
		Candidat.updateOne({
				_id: id
			}, {
				$set: updateOps
			})
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'Candidat updated',
					request: {
						type: 'GET',
						url: 'http://localhost:4040/allcandidats/' + id
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


//Candidats Deleted
router.delete('/:CandidatId', (req, res, next) => {
	const id = req.params.CandidatId;
	Candidat.deleteOne({
			_id: id
		})
		.exec()
		.then(result => {
			res.status(201).json({
				message: "Candidat's Deleted",
				request: {
					type: "POST",
					url: "http://localhost:4040/allCandidats/",
					body: {
						"openPosId": "ID",
						"name": "String",
						"surname": "String",
						"email": "String@mial.com",
						"gender": "Array",
						"age": "Number"
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