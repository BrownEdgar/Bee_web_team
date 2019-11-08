const mongoose = require("mongoose");

const benefitSchema = mongoose.Schema({
	id: {
        type: mongoose.Schema.Types.ObjectId
	},
	title: {
        type: String,
        required:true
	},
	description: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model("Benefit", benefitSchema);