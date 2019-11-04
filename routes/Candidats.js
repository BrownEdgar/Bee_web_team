const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Candidat = require('../models/Candidats');

//get all Candidats
router.get('/', function (req, res) {
	Candidat.find()
		.exec()
		.then(docs => {
			const allCandidats = {
				count: docs.length,
				Candidats: docs.map(doc => {
					return {
						_id: doc._id,
						title: doc.title,
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
router.post('/', function (req, res, next) {
	console.log(req.body.title);

	const Candidat = new Candidat({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title
	})
	Candidat.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				createdCandidat: {
					_id: result._id,
					title: result.title
				},
				request: {
					message: 'Candidat is sorted',
					type: "GET",
					url: "http://localhost:4040/allCandidats/" + result._id
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

//get Candidats by ID
router.get('/:CandidatId', function (req, res, next) {
	const id = req.params.CandidatId;
	Candidat.findById(id)
		.select('title _id')
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
router.patch('/:CandidatId', function (req, res, next) {
	const id = req.params.CandidatId;
	Candidat.updateOne({
			_id: id
		}, {
			$set: {
				title: req.body.title
			}
		})
		.exec()
		.then(result => {
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


//Candidats Deleted
router.delete('/:CandidatId', function (req, res, next) {
	const id = req.params.CandidatId;
	Candidat.remove({
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