import mongoose from 'mongoose';

const mappedTreeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'A mapped tree must have a user'],
  },
  tree: {
    type: mongoose.Types.ObjectId,
    ref: 'Tree',
    default: null,
  },
  image: {
    type: String,
    required: [true, 'You must upload an image'],
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
  },
  quantity: {
    type: Number,
    required: [true, 'Enter the number of trees you spotted'],
  },
});

// CREATE A 2D SPHERE INDEX ON THE COORDINATE FIELD
mappedTreeSchema.index({ location: '2dsphere' });

// CREATING A MAPPED TREE OBJECT BASED ON THE MAPPED TREE SCHEMA
const MappedTree = mongoose.model('MappedTree', mappedTreeSchema);

// EXPORTING THE TREE OBJECT
export default MappedTree;
