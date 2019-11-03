const mongoose = require("mongoose");

const benefitHistorySchema = mongoose.Schema({
	benefitId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Benefit',
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model("BenefitHistory", benefitHistorySchema);