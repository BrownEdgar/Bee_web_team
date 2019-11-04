const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/User');

const PassportCheck = require('../loginConfig')
PassportCheck(
	passport,
	email => User.find({email:email},{_id:0}),
	_id => User.find({_id:_id})
)

router.get('/', function (req, res) {
	res.render("login.ejs");
});

router.post('/', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}))



module.exports = router;