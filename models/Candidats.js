const mongoose = require("mongoose");

const condidatSchema = mongoose.Schema({
	openPosId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OpenPosition',
	},
	name:{
		type: String,
		max:255,
		min:2
    },
    surname:{
		type: String,
		max:255,
		min:2
	},
	email: {
		type: String,
		max:255,
		min:6
	},
	gender: {
		type: String,
		enum: ["male", "female"]
	},
	age: {
		type: Number,
		min:18,
		max:63
	},
	skills:{
		type: String,
	},
	education: {
		type: String
	},
	experience:{
		type: String,
	},
	file:{
		type:String
	},
	deletedAt: {
		type: Date,
		default: null
	}
});

module.exports = mongoose.model("Condidat", condidatSchema);