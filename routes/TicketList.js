const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const TicketListsController = require('../Controller/TicketList');
const controller = new TicketListsController();

//get all TicketLists
router.get('/', checkAuth, controller.getTicketLists);

//add TicketLists
router.post('/', checkAuth, controller.addTicketList);

//get TicketLists by ID
router.get('/:ticketId', checkAuth, controller.getTicketListById);

//update TicketLists
router.patch('/:ticketId', checkAuth, controller.updateTicketList);

//TicketLists Deleted
router.delete('/:ticketId', checkAuth, controller.deleteTicketList);

module.exports = router;