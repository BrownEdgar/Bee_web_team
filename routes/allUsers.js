const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/User');

/* GET Users page. */
router.get('/', function (req, res, next) {

	User.find()
		.select('name email _id dob')
		.exec()
		.then(docs => {
			const allUsers = {
				count: docs.length,
				Users: docs.map(doc => {
					return {
						_id: doc._id,
						name: doc.name,
						email: doc.email,
						dob: doc.dob,
						request: {
							type: "GET",
							url: "http://localhost:4040/allusers/" + doc._id
						}
					}
				})
			}
			res.status(201).json(allUsers);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

router.post('/', function (req, res, next) {
	const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			gender:req.body.gender,
			dob: req.body.dob,
	})
	user.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				createdUser: {
					_id: result._id,
					name: result.name,
					email: result.email,
					dob: result.dob,
					gender: result.gender
				},
				request: {
					message: 'User is sorted',
					type: "GET",
					url: "http://localhost:4040/allusers/" + result._id
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


router.get('/:userId', function (req, res, next) {
	const id = req.params.userId;
	User.findById(id)
		.exec()
		.then(user => {
			if (!user) {
				return res.status(404).json({
					message: 'User not found'
				})
			}
			res.status(200).json({
				user: user,
				request: {
					type: "GET",
					url: "http://localhost:4040/allusers/"
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
router.delete('/:userId', function (req, res, next) {
	const id = req.params.userId;
	User.remove({
			_id: id
		})
		.exec()
		.then(result => {
			res.status(201).json({
				message: "User Deleted",
				request: {
					type: "POST",
					url: "http://localhost:4040/allusers/",
					body: {
						productId: "ID",
						name:"string",
						email: "String",
						dob:"Date"
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