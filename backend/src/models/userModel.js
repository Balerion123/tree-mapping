import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    select: false,
  },
  isFinder: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: Number,
    default: 0,
    enum: [0, 1, 2, 3],
  },
  score: {
    type: Number,
    default: 0,
  },
});

// CREATING AN OBJECT USER BASED ON THE USER SCHEMA
const User = mongoose.model('User', userSchema);

// EXPORTING THE USER OBJECT
export default User;
