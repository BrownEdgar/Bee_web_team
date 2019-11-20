import mongoose from "mongoose";

const benefitHistorySchema = mongoose.Schema({
	benefitId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Benefit',
		required: [true, 'please fill in the field']
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true,  'please fill in the field']
	},
	createdAt: {
		type: Date,
		default: new Date().toDateString()
	}
});


export default  mongoose.model("BenefitHistory", benefitHistorySchema);