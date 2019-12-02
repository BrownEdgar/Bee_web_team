const mongoose = require("mongoose");


const openPositionSchema = mongoose.Schema({
	
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},

	title: {
		type: String,
		required: [true, `required fields`],
		maxlength: 100,
		minlength: 2
	},

	description: {
		type: String,
		required: [true, `required fields`],
		maxlength: 1024,
		minlength: 2
	},

	gender: {
		type: String,
		enum: ["male", "female"],
		required: [true, `required fields, must by 'male' or 'female'`],
	},

	ageLimit: {
		type: Number,
		default: 18,
		min: 18,
		max: 63,
		required: [true, `required fields, should be in the range of 18-63`],
	},
	salary: {
		type: Number,
		default: 50000,
		required: [true, `required fields, should be more or equal '50000'`],
		min: 50000
	}
});


module.exports = mongoose.model("OpenPosition", openPositionSchema);