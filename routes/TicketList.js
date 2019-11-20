import express from 'express';
const router = express.Router();
import TicketListsController from '../Controller/TicketList';
const controller = new TicketListsController();
import loginValidator from '../Validate/loginValidator';
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

export default router;