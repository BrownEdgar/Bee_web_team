const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const UserController = require('../Controller/Users');
const controller = new UserController();
const loginValidator = require('../Validate/loginValidator');
const checkAuth = new loginValidator()



router.get('/', (req, res, next) => {
	res.send("register page")
});

router.get('/login',  (req, res, next) => {
	res.send("login page")
});

router.post('/', checkAuth.isRegister, controller.addUser);


router.post('/login', controller.loginUser);


module.exports = router;