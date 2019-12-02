const express = require('express');
const router = express.Router();
const UsersController = require('../Controller/Users');
const controller = new UsersController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();
const User = require('../models/User');
const Pagination = require('../middleware/getUsers');
const authHelper = require('../helpers/authHelper');

/* GET Users page. */

router.get("/", [ Pagination(User)], function (req, res) {
	res.json(res.pagination)
});
router.post('/refresh-tokens', controller.refreshTokens);

router.get('/me', checkAuth.isLogin, controller.getMyInfo);

router.get('/:Id', [checkAuth.isIdCorrect], controller.getUser);

router.patch('/:Id', [checkAuth.isIdCorrect], controller.updateUser);

router.delete('/:Id', [checkAuth.isIdCorrect], controller.deleteUser);

module.exports = router;