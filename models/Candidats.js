import mongoose from "mongoose";

const condidatSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	openPosId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OpenPosition',
		required: [true, 'openPosId is required, please indicate it'],
	},
	name:{
		type: String,
		required: [true, 'please indicate a field'],
		max:255,
		min:2
    },
    surname:{
		type: String,
		required: [true, 'please indicate a field'],
		max:255,
		min:2
	},
	email: {
		type: String,
		required: [true, 'please indicate a field'],
		max:255,
		min:6,
	},
	gender: {
		type: String,
		enum: ["male", "female"],
		required: [true, 'please indicate your gender'],
	},
	age: {
		type: Number,
		required: [true, 'please indicate your age'],
		min:18,
		max:63
	},
	skills:{
		type: String,
		required: [true, 'please indicate yours skills'],
	},
	education: {
		type: String,
		required: [true, 'please indicate where you studied'],
	},
	experience:{
		type: String,
		required: [true, 'please indicate yours experience'],
	}
});


export default mongoose.model("Condidat", condidatSchema);