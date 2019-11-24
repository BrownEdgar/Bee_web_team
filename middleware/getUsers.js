const {Errors} = require('../helpers/error');
const Error = new Errors();



module.exports = function pagination(model) {
	return async (req, res, next) => {
		let checkUsers = await model.find({
			deletedAt: null
		});
		if (checkUsers.length < 1) {
			Error.noDataError(res);
		}
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);
		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;
		console.log('page', page);
		console.log('limit', limit);
		console.log('startIndex', startIndex);
		console.log('endIndex', endIndex);
		const results = {}
		if (endIndex < await model.countDocuments().exec()) {
			results.next = {
				page: page + 1,
				limit
			}
		}
		if (startIndex > 0) {
			results.previous = {
				page: page - 1,
				limit
			}
		}
		try {
			results.results = await model.find({
				deletedAt: null
			})
			.limit(limit)
			.skip(startIndex)
			.select('firstname lastname salary phoneNumber email birthday password role _id');
			res.pagination = results
			next();
		} catch (error) {
			Error.serverError(res, error.message);
		}
	}
}