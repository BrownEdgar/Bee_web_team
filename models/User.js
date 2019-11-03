const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	name:{
		type: String,
		required:true,
		max:255,
		min:6
	},
	email: {
		type: String,
		required: true,
		max:255,
		min:6,
	},
	password:{
		type: String,
		required: true,
		max:1024,
		min:6
	},
	male: {
        type: String,
        required:true,
        default:"man"
	},
	dob: {
		type: Date,
		required:true
	}
});


module.exports = mongoose.model("User", userSchema);