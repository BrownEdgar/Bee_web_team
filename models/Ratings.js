const mongoose = require("mongoose");

const ratingsSchema = new mongoose.Schema({
    userId: {
        type: 'ObjectId',
		    ref: 'User',
		    required: [true, 'please fill in the field']
    },
    adminId: {
        type: 'ObjectId',
		    ref: 'User',
    },
    rating: {
      type: Number,
      min: [1, 'Too few number'],
      max: 5
    }
},
{
  timestamps: {createdAt: 'created_at'}
});

module.exports = mongoose.model('ratings', ratingsSchema);