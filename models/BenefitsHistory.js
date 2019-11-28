import mongoose from "mongoose";

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


export default mongoose.model("BenefitHistory", benefitHistorySchema);