const mongoose = require("mongoose");

const benefitHistorySchema = mongoose.Schema({
	benefitId: {
		type: 'ObjectId',
		ref: 'Benefit',
		required: [true, 'please fill in the field']
	},
	userId: {
		type: 'ObjectId',
		ref: 'User',
		required: [true,  'please fill in the field']
	},
}, 
{
	timestamps: {createdAt: 'created_at'}
});


module.exports = mongoose.model("BenefitHistory", benefitHistorySchema);