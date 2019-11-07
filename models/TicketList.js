const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
	userId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
    },
    dateStart: {
        type: Date,
        default: new Date().toDateString(),
        required: true
    },
    dateEnd: {
        type: Date,
        default: new Date().toDateString(),
		required:true
	}
});

module.exports = mongoose.model("Ticket", ticketSchema);