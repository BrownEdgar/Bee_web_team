import express from 'express';
const router = express.Router();
import UsersController from '../Controller/Users';
const controller = new UsersController();
import loginValidator from '../Validate/loginValidator';
const checkAuth = new loginValidator();

/* GET Users page. */
router.get('/', controller.getUsers);

router.get('/:userId', controller.getUser);

router.patch('/:userId', controller.updateUser);

router.delete('/:userId', controller.deleteUser);

export default router;