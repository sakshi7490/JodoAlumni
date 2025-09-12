const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  batch: String,
  jobTitle: String,
  company: String,
  role: { type: String, enum: ['student', 'alumni', 'admin'], default: 'student' },
  isMentor: { type: Boolean, default: false },
  googleId: String,
  linkedinId: String,
  badges: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User ', userSchema);