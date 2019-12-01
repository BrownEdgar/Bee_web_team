const mongoose = require("mongoose");


const TokenSchema = mongoose.Schema({
	tokenId: { type: String },
	userId: { type: String }
});
module.exports = mongoose.model("Token", TokenSchema);