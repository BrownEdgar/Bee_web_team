const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const UsersController = require('../Controller/Users');
const controller = new UsersController();

/* GET Users page. */
router.get('/', controller.getAllUsers);

router.get('/:userId', controller.getUser);

router.patch('/:userId', controller.updateUser);

router.delete('/:userId', controller.deleteUser);

module.exports = router;