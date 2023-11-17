import mongoose from 'mongoose';

const treeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An event must have a name'],
  },
  scientificName: {
    type: String,
    required: [true, 'An event must have ascientific name'],
  },
  culturalFacts: {
    type: String,
    required: [true, 'Please give a cultural fact about the tree'],
  },
  additionalFacts: {
    type: String,
    required: [true, 'Please give one additional fact about the tree'],
  },
  image: {
    type: String,
    required: [true, 'Please give link to the image of this tree'],
  },
});

// CREATE A 2D SPHERE INDEX ON THE COORDINATE FIELD
treeSchema.index({ location: '2dsphere' });

// CREATING AN OBJECT TREE BASED ON THE TREE SCHEMA
const Tree = mongoose.model('Tree', treeSchema);

// EXPORTING THE TREE OBJECT
export default Tree;
