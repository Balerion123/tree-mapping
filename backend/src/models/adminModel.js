import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
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
});

// CREATING AN OBJECT BASED ON THE ADMIN SCHEMA
const Admin = mongoose.model('Admin', adminSchema);

// EXPORTING THE ADMIN OBJECT
export default Admin;
