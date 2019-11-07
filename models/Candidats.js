const mongoose = require("mongoose");

const condidatSchema = mongoose.Schema({
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

	},
	education: {
		
	},
	experience :{

	}
	

});


module.exports = mongoose.model("Condidat", condidatSchema);