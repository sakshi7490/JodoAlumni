const mongoose = require('mongoose');

const mentorshipGroupSchema = new mongoose.Schema({
  name: String,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User ' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MentorshipGroup', mentorshipGroupSchema);