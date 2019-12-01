const mongoose = require("mongoose");

let maxDate = Date.now() + 60 * 24 * 60 * 60 * 1000;

const ticketSchema = mongoose.Schema({
	userId: {
        type: 'ObjectId',
		ref: 'User',
		required: [true, 'please fill in the field']
    },
    dateStart: {
		type: Date,
		min: Date.now,
		max: maxDate,
		default: () => Date.now() + 3 * 60 * 60 * 1000,
        required: [true, 'please fill in the field']
    },
    dateEnd: {
		type: Date,
		min: Date.now,
		max: maxDate,
		default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
		required: [true, 'please fill in the field']
	}
});

module.exports = mongoose.model("Ticket", ticketSchema);
