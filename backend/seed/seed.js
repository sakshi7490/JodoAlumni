const mongoose = require('mongoose');
const User = require('../models/User');
const Event = require('../models/Event');
const MentorshipGroup = require('../models/MentorshipGroup');
const { MONGO_URI } = require('../config');

async function seed() {
  await mongoose.connect(MONGO_URI);

  await User.deleteMany({});
  await Event.deleteMany({});
  await MentorshipGroup.deleteMany({});

  const alumni1 = new User({
    name: 'Alice Johnson',
    email: 'alice@example.com',
    batch: '2018',
    jobTitle: 'Software Engineer',
    company: 'Google',
    role: 'alumni',
    isMentor: true,
  });
  const alumni2 = new User({
    name: 'Bob Smith',
    email: 'bob@example.com',
    batch: '2017',
    jobTitle: 'Product Manager',
    company: 'Microsoft',
    role: 'alumni',
    isMentor: false,
  });
  const student1 = new User({
    name: 'Charlie Student',
    email: 'charlie@student.com',
    batch: '2023',
    role: 'student',
  });
  const admin = new User({
    name: 'Admin User',
    email: 'admin@jodoalumni.com',
    role: 'admin',
  });

  await Promise.all([alumni1.save(), alumni2.save(), student1.save(), admin.save()]);

  const event1 = new Event({
    title: 'Alumni Meetup 2024',
    description: 'Annual alumni gathering',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    createdBy: admin._id,
    attendees: [alumni1._id, student1._id],
  });

  await event1.save();

  const group1 = new MentorshipGroup({
    name: 'Web Dev Mentorship',
    mentor: alumni1._id,
    students: [student1._id],
  });

  await group1.save();

  console.log('Seed data created');
  process.exit();
}

seed();