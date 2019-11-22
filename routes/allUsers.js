const express = require('express');
const router = express.Router();
const UsersController = require('../Controller/Users');
const controller = new UsersController();
const loginValidator = require('../Validate/loginValidator');
const {Errors} = require('../helpers/error');
const Error = new Errors();
const checkAuth = new loginValidator();

/* GET Users page. */

router.get('/',  controller.getUsers);

router.get('/me', checkAuth.isLogin, controller.getMyInfo);

router.get('/:userId', [checkAuth.isIdCorrect], controller.getUser);

router.patch('/:userId', [checkAuth.isIdCorrect], controller.updateUser);

router.delete('/:userId', [checkAuth.isIdCorrect], controller.deleteUser);

module.exports = router;