const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const TicketList = require('../models/TicketList');
const User = require('../models/User');
const TicketListsController = require('../Controller/TicketList');
const controller = new TicketListsController();

//get all TicketLists
router.get('/', controller.getAllTicketLists);

//add TicketLists
router.post('/', controller.addTicketList);

//get TicketLists by ID
router.get('/:ticketId', controller.getTicketListById);


//update TicketLists
router.patch('/:ticketId', controller.updateTicketList);



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