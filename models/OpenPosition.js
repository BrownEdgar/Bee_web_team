const mongoose = require("mongoose");


const openPositionSchema = mongoose.Schema({
    id: {
		type: mongoose.Schema.Types.ObjectId,
	},
    title: {
        type: String,
        required:true
	},
	description: {
		type: String,
		required: true
    },
    male: {
        type: String,
        required:true,
        default:"man"
	},
	age: {
		type: Number,
        default: 18,
        min:18,
        max:50
	}
});


module.exports = mongoose.model("OpenPosition", openPositionSchema);