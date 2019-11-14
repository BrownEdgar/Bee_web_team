const express = require('express');
const router = express.Router();
const UsersController = require('../Controller/Users');
const controller = new UsersController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();

/* GET Users page. */
router.get('/', controller.getUsers);

router.get('/:userId', controller.getUser);

router.patch('/:userId', controller.updateUser);

router.delete('/:userId', controller.deleteUser);

module.exports = router;