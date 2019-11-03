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
	age: {
		type: Number,
		required:true
	}
});


module.exports = mongoose.model("Condidat", condidatSchema);