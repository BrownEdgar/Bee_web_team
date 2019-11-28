import express from 'express';
const router = express.Router();
import UsersController from '../Controller/Users';
const controller = new UsersController();
import loginValidator from '../Validate/loginValidator';
const checkAuth = new loginValidator();
import User from '../models/User';
import Pagination from '../middleware/getUsers';

/* GET Users page. */

router.get("/", [checkAuth.isLogin, Pagination(User)], function (req, res) {
	res.json(res.pagination)
});

router.get('/me', checkAuth.isLogin, controller.getMyInfo);

router.get('/:userId', [checkAuth.isIdCorrect], controller.getUser);

router.patch('/:userId', [checkAuth.isIdCorrect], controller.updateUser);

router.delete('/:userId', [checkAuth.isIdCorrect], controller.deleteUser);



export default router;