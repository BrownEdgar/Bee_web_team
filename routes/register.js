const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const UserController = require('../Controller/Users');
const controller = new UserController();

router.get('/', (req, res, next) => {
res.send("register page")
});
router.get('/login', (req, res, next) => {
	res.send("login page")
});

router.post('/', controller.addUser);

// router.post('/login', controller.loginUser);
 router.post("/login", (req, res, next) => {
 	User.find({
 			email: req.body.email
 		})
 		.exec()
 		.then(user => {
 			if (user.length < 1) {
 				return res.status(401).json({
 					message: "login failed",
 					"kind": "Invalid username/password supplied"
 				});
 			}
 			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
 				if (err) {
 					return res.status(401).json({
 						message: "login failed"
 					});
 				}
 				if (result) {
 					const token = jwt.sign({
 							email: user[0].email,
 							userId: user[0]._id
 						},
 						process.env.SESSION_SECRET, {
 							expiresIn: "1h"
 						}
 					);
 					return res.status(200).json({
 						message: "Login successful",
 						token: token
 					});
 				}
 				res.status(401).json({
 					message: "Login failed"
 				});
 			});
 		})
 		.catch(err => {
 			console.log(err);
 			res.status(500).json({
 				error: err
 			});
 		});
 });

module.exports = router;