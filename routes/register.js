const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


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
		const savedUser = await user.save();
		console.log(savedUser);
		res.redirect("/login")
	} catch (error) {
		console.log(error);
		res.redirect("/register")
	}	
});

module.exports = router;