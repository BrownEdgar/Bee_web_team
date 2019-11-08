const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/User');
const checkAuth = require('../middleware/checkLogin');
const UsersController = require('../Controller/Users');
const controller = new UsersController();

/* GET Users page. */
router.get('/', controller.getAllUsers);
// router.get('/', checkAuth, (req, res, next) => {
// 	User.find()
// 		.select('name email _id dob')
// 		.exec()
// 		.then(docs => {
// 			const allUsers = {
// 				count: docs.length,
// 				Users: docs.map(doc => {
// 					return {
// 						_id: doc._id,
// 						name: doc.name,
// 						email: doc.email,
// 						dob: doc.dob,
// 						request: {
// 							type: "GET",
// 							url: "http://localhost:4040/allusers/" + doc._id
// 						}
// 					}
// 				})
// 			}
// 			res.status(201).json(allUsers);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.status(500).json({
// 				error: err
// 			})
// 		});

// });

router.get('/:userId', controller.getUser);
// router.get('/:userId', (req, res, next) => {
// 	const id = req.params.userId;
// 	User.findById(id)
// 		.exec()
// 		.then(user => {
// 			if (!user) {
// 				return res.status(400).json({
// 					message: 'User not found'
// 				})
// 			}
// 			res.status(200).json({
// 				user: user,
// 				request: {
// 					type: "GET",
// 					url: "http://localhost:4040/allusers/"
// 				}
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.status(500).json({
// 				error: err
// 			})
// 		});
// });


router.patch('/:userId', async (req, res, next) => {
	const id = req.params.userId;
	const updateOps = {};
	for (const ops of req.body) {
		console.log("ops.propName", ops.propName);

		await User.findOne({
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
	User.updateOne({
			_id: id
		}, {
			$set: updateOps
		})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'User updated',
				request: {
					type: 'GET',
					url: 'http://localhost:4040/allUsers/' + id
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

router.delete('/:userId', (req, res, next) => {
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