import mongoose from "mongoose";

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


export default  mongoose.model("Benefit", benefitSchema);