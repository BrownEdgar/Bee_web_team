import jwt from 'jsonwebtoken';

export default  (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, process.env.SESSION_SECRET);
		if (!decoded) {
			return res.status(401).json({
				message: 'token error'
			});
		}
		req.userData = decoded;
		next();
	} catch (error) {
		return res.status(401).json({
			message: 'Login failed'
		});
	}
};