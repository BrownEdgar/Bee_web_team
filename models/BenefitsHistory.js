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
	createdAt: {
		type: Date,
		default: new Date().toDateString()
	}
});


module.exports = mongoose.model("BenefitHistory", benefitHistorySchema);