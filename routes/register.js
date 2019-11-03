const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/', function (req, res) {
	res.render("register.ejs");
});

router.post('/', async function (req, res) {

	  const username = req.body.name;
	  const useremail = req.body.email;
	  console.log(username, useremail);
	try {
		const passStugum = await bcrypt.hash(req.body.password,10);
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: passStugum,
		});
		const savedUSer = await user.save();
		console.log(savedUSer);
		res.redirect("/login")
	} catch (error) {
		console.log(error);
		res.redirect("/register")
	}	
});

module.exports = router;