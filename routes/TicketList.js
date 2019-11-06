const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const TicketList = require('../models/TicketList');
const User = require('../models/User');

//get all TicketLists
router.get('/', function (req, res) {
	TicketList.find()
		.exec()
		.then(docs => {
			const allTicketLists = {
				count: docs.length,
				TicketLists: docs.map(doc => {
					return {
						benefitId: doc.benefitId,
						userId: doc.userId,
						givesDate: doc.date,
						request: {
							type: "GET",
							url: "http://localhost:4040/ticketlists/" + doc._id
						}
					}
				})
			}
			res.status(201).json(allTicketLists);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//add TicketLists
router.post('/', async (req, res, next) => {
	const id = req.body.userid;
	await User.findById(id)
		.then(result => {
			if (result) {
				const newTicket = new TicketList({
					_id: new mongoose.Types.ObjectId(),
					dateStart: req.body.dateStart,
					dateEnd: req.body.dateEnd,
					userid: req.body.userid
				})
				newTicket.save()
					.then(result => {
						console.log(result);
						res.status(201).json({
							createdTicketList: {
								_id: result._id,
								dateStart: result.dateStart,
								dateEnd: result.dateEnd,
								userid: result.userid
							},
							request: {
								message: 'TicketList is sorted',
								type: "GET",
								url: "http://localhost:4040/ticketlists/" + result._id,
								userInfo: "http://localhost:4040/allusers/" + result.userid
							}
						});
					})

			} else {
				return res.status(409).json({
					message: 'invalid  USER ID, please check it',
					url: "http://localhost:4040/allusers/"
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


//get TicketLists by ID
router.get('/:ticketId', (req, res, next) => {
	const id = req.params.ticketId;
	TicketList.findById(id)
		.exec()
		.then(ticketOps => {
			if (!ticketOps) {
				return res.status(404).json({
					message: 'TicketList  not found'
				})
			}
			res.status(200).json({
				ticketOptions: ticketOps,
				request: {
					type: "GET",
					url: "http://localhost:4040/ticketlists"
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

//update TicketLists
router.patch('/:ticketId', (req, res, next) => {
	const id = req.params.ticketId;
	TicketList.updateOne({
			_id: id
		}, {
			$set: {
				dateStart: req.body.dateStart,
				dateEnd: req.body.dateEnd
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


//TicketLists Deleted
router.delete('/:ticketId', (req, res, next) => {
	const id = req.params.ticketId;
	TicketList.deleteOne({
			_id: id
		})
		.exec()
		.then(result => {
			res.status(201).json({
				message: "TicketList's Deleted",
				request: {
					type: "POST",
					url: "http://localhost:4040/ticketlists/",
					body: {
						userid: "ID",
						dateStart: "Date",
						dateEnd: "Date",
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