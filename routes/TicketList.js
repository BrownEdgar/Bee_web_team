const express = require('express');
const router = express.Router();
const TicketListsController = require('../Controller/TicketList');
const controller = new TicketListsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();

//get all TicketLists
router.get('/', controller.getTicketLists);

//add TicketLists
router.post('/', controller.addTicketList);

//get TicketLists by ID
router.get('/:ticketId', controller.getTicketListById);

//update TicketLists
router.patch('/:ticketId', controller.updateTicketList);

//TicketLists Deleted
router.delete('/:ticketId', controller.deleteTicketList);

module.exports = router;