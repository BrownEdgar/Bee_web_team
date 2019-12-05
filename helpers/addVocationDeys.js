const cron = require('node-cron');
const User = require("../models/User");
const { Errors } = require('../helpers/error');
const Error = new Errors();


module.exports =  cron.schedule('0 0 * * *', async () => {
	console.log('running every day');
	let dt = new Date;
	let pastMonth = dt.setMonth(dt.getMonth() - 1);

	User.updateMany({
		deletedAt: null,
	},
		// {
		// 	$eq: ["$updatedAt", pastMonth]
		// },
		{$or: [ {updatedAt:pastMonth}, {createdAt:pastMonth}]},
	{
		$inc: {
			vocationDay: 1
		}
	}).catch(err => {
		console.log(err.message);

	})	
});

