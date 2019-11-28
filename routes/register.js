import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";
import User from "../models/User";
import jwt from "jsonwebtoken";
import UserController from '../Controller/Users';
const controller = new UserController();
import loginValidator from '../Validate/loginValidator';
const checkAuth = new loginValidator()

router.get('/', (req, res, next) => {
	res.send("register page")
});

router.get('/login',  (req, res, next) => {
	res.send("login page")
});

router.post('/', checkAuth.isRegister, controller.addUser);

// router.post('/login', controller.loginUser);
router.post("/login", (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		return res.status(401).json({
			message: "login failed",
			"kind": "Invalid email or password"
		});
	}
	User.findOne({
			email: req.body.email
		})
		.exec()
		.then(user => {
			if (user.length < 1) {
				return res.status(401).json({
					message: "login failed",
					"kind": "Invalid email address"
				});
			}
			bcrypt.compare(req.body.password, user.password, (err, result) => {
				if (err) {
					return res.status(401).json({
						message: "login failed"
					});
				}
				if (result) {
					const token = jwt.sign({
							email: user.email,
							userId: user._id
						},
						process.env.SESSION_SECRET, {
							expiresIn: "1h"
						}
					);
					return res.status(200).json({
						user,
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

export default router;