import mongoose from "mongoose";

let maxDate = Date.now() + 60 * 24 * 60 * 60 * 1000;

const ticketSchema = mongoose.Schema({
	userId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
    },
    dateStart: {
		type: Date,
		min: Date.now,
		max: maxDate,
		default: () => Date.now() + 3 * 60 * 60 * 1000,
        required: true
    },
    dateEnd: {
		type: Date,
		min: Date.now,
		max: maxDate,
		default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
		required:true
	}
});

export default mongoose.model("Ticket", ticketSchema);
