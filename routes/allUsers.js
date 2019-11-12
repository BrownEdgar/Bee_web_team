const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkLogin');
const UsersController = require('../Controller/Users');
const controller = new UsersController();

/* GET Users page. */
router.get('/', checkAuth, controller.getUsers);

router.get('/:userId', checkAuth, controller.getUser);

router.patch('/:userId', checkAuth, controller.updateUser);

router.delete('/:userId', checkAuth, controller.deleteUser);

module.exports = router;