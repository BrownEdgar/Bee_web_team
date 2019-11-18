const mongoose = require("mongoose");

const benefitSchema = mongoose.Schema({
	_id: {
        type: mongoose.Schema.Types.ObjectId
	},
	 title: {
	 	type: String,
	 	validate: {
	 		validator: function (v) {
	 			return /[a-zA-Z]/.test(v);
	 		},
	 		message: props => `${props.value} is not a valid phone number!`
	 	},
	 	required: [true, 'User phone number required']
	 },
	description: {
		type: String,
		required: [true, "field is required, please add a description"],
	}
});


module.exports = mongoose.model("Benefit", benefitSchema);