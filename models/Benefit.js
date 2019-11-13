const mongoose = require("mongoose");

const benefitSchema = mongoose.Schema({
	_id: {
        type: mongoose.Schema.Types.ObjectId
	},
	title: {
        type: String,
        required: [true, "field is required, please fill in the field"]
	},
	description: {
		type: String,
		required: [true, "field is required, please add a description"]
	}
});


module.exports = mongoose.model("Benefit", benefitSchema);