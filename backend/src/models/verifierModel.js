import mongoose from 'mongoose';

const verfierSchema = new mongoose.Schema({
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

// CREATING AN OBJECT BASED ON THE VERIFIER SCHEMA
const Verifier = mongoose.model('Verifier', verfierSchema);

// EXPORTING THE VERIFIER OBJECT
export default Verifier;
