const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

const authRoutes = require('./routes/auth');
// similarly import other routes: users, events, mentorship

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/mentorship', mentorshipRoutes);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = app;