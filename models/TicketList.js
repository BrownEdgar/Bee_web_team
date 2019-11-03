const ticketSchema = mongoose.Schema({
	userid: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
    },
    dateStart: {
        type: Date,
        default:Date.now,
		required:true
    },
    dateEnd: {
        type: Date,
		required:true
	}
});

module.exports = mongoose.model("Ticket", ticketSchema);