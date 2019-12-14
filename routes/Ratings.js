const express = require('express');
const router = express.Router();
const RatingsListsController = require('../Controller/RatingsLists');
const controller = new RatingsListsController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator();


router.get('/',  controller.getRatings);

 router.post('/', checkAuth.isLogin, controller.addRating);

// router.get('/:Id', [checkAuth.isIdCorrect], controller.getUser);

// router.patch('/:Id', [checkAuth.isIdCorrect], controller.updateUser);

module.exports = router;