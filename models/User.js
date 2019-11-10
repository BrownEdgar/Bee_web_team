const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	name: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 2
	},
	surname: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 2
	},
	age: {
		type: Number,
		required: true,
		min:16,
		max:67
	},
	email: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 6
	},
	password: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 6
	},
	gender: {
		type: String,
		enum: ["male", "female"]
	},
	dob: {
		type: Date,
		required: true,
		min: '1957-09-28',
		max: '2000-01-01'
	},
	role:{
		type: String,
		required: true
	}
});


module.exports = mongoose.model("User", userSchema);