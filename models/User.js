import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	name: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 2
	},
	surname: {
		type: String,
		required: [true, `surname fields is required`],
		maxlength: 1024,
		minlength: 2
	},
	age: {
		type: Number,
		required: true,
		min:16,
		max:67
	},
	email: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 5
	},
	password: {
		type: String,
		required: true,
		maxlength: 156,
		minlength: 8
	},
	gender: {
		type: String,
		enum: ["male", "female"]
	},
	dob: {
		type: Date,
		required: [true, 'dob field is required'],
		min: '1957-09-28',
		max: '2000-01-01'
	},
	role:{
		type: String,
		enum: ["0", "1", "2"],
		required: [true,'Must by "0"-admin "1"-meneger, "2"-stuff']
	},
	deletedAt:{
		type:Date,
		default:null
	}
});


export default  mongoose.model("User", userSchema);