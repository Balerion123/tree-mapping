import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An event must have a name'],
  },
  radius: {
    type: Number,
    required: [true, 'An event must have a radius'],
  },
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      required: [true, 'Please set your coordinates'],
    },
    address: String,
  },
  description: {
    type: String,
    required: [true, 'Event must have a description'],
  },
  approved: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: [true, 'An event must have a date'],
  },
});

// CREATE A 2D SPHERE INDEX ON THE COORDINATE FIELD
eventSchema.index({ location: '2dsphere' });

// CREATING AN OBJECT USER BASED ON THE EVENT SCHEMA
const Event = mongoose.model('Event', eventSchema);

// EXPORTING THE USER OBJECT
export default Event;
