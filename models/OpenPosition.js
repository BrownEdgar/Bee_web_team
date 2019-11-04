const mongoose = require("mongoose");


const openPositionSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},

	title: {
		type: String,
		required: true,
		maxlength: 100,
		minlength: 2
	},

	description: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 2
	},

	gender: {
		type: String,
		enum: ["male", "female"]
	},

	ageLimit: {
		type: Number,
		default: 18,
		min: 18,
		max: 63
	},
	salary: {
		type: Number,
		default: 50000,
		required: true,
		min: 50000
	}
});


module.exports = mongoose.model("OpenPosition", openPositionSchema);