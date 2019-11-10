const mongoose = require("mongoose");

const condidatSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	openPosId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OpenPosition',
		required: true
	},
	name:{
		type: String,
		required:true,
		max:255,
		min:2
    },
    surname:{
		type: String,
		required:true,
		max:255,
		min:2
	},
	email: {
		type: String,
		required: true,
		max:255,
		min:6,
	},
	gender: {
		type: String,
		enum: ["male", "female"]
	},
	age: {
		type: Number,
		required:true,
		min:18,
		max:63
	},
	skills:{
		type: String,
		required: true
	},
	education: {
		type: String,
		required: true
	},
	experience:{
		type: String,
		required: true
	}
});


module.exports = mongoose.model("Condidat", condidatSchema);