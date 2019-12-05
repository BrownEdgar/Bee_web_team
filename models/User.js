const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	firstname: {
		type: String,
		required: true,
		maxlength: 100,
		minlength: 2,
	},
	lastname: {
		type: String,
		required: [true, `surname fields is required`],
		maxlength: 100,
		minlength: 2
	},
	phoneNumber: {
		type: Number,
		required: [true, `phoneNumber fields is required`]
	},
	email: {
		type: String,
		required: true,
		maxlength: 1024,
		minlength: 5,
		unique:true
	},
	salary: {
		type: Number,
		required: true,
		default:null
	},
	password: {
		type: String,
		required: [true, 'password field is required'],
		maxlength: [156, 'Too much characters'],
		minlength: [6, 'Too few characters'],
	},
	birthday: {
		type: Date,
		required: [true, 'dob field is required'],
		min: '1957-09-28',
		max: '2000-01-01'
	},
	role:{
		type: String,
		enum: ["0", "1", "2"],
		required: [true, 'Must by "0"-admin "1"-meneger, "2"-stuff']
	},
	vocationDay:{
		type: Number,
		default: 0
	},
	deletedAt:{
		type:Date,
		default:null
	}
},
	{
		timestamps:{createAt:"created_at"}
	});
module.exports = mongoose.model("User", userSchema);
