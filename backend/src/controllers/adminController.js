import Event from '../models/eventModel.js';
import MappedTree from '../models/mappedTreeModel.js';
import Tree from '../models/treeModel.js';
import User from '../models/userModel.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';

export const addNewTreeFinder = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    isFinder: true,
  });
  res.status(200).json({ message: 'success' });
});

export const showAllTreeFinders = catchAsync(async (req, res, next) => {
  const treeFinders = await User.find({ isFinder: true }).select('+password');

  console.log(treeFinders);

  let result = treeFinders.map((item) => {
    return { name: item.name, email: item.email, password: item.password };
  });
  res.status(200).json({ result });
});

export const getAllEvents = catchAsync(async (req, res, next) => {
  const events = await Event.find();
  console.log(events);
  res.status(200).json({ events });
});

export const getPendingEvents = catchAsync(async (req, res, next) => {
  const events = await Event.find({ approved: false });
  console.log(events);
  res.status(200).json({ events });
});

export const approveEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.id, {
    approved: true,
  });
  res.status(200).json({ event });
});

export const deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  res.status(200).json({ event });
});

export const listOfAllMappedTrees = catchAsync(async (req, res, next) => {
  let trees = await MappedTree.find();
  console.log(trees);
  for (let i = 0; i < trees.length; i++) {
    let tree = await Tree.findById(trees[i].tree);
    let user = await User.findById(trees[i].user);
    
    trees[i] = { ...trees[i]._doc, treeDetails: tree._doc, user: user._doc };
  }
  res.status(200).json({ trees });
});

export const deleteMappedTree = catchAsync(async (req, res, next) => {
  const tree = await MappedTree.findById(req.params.id);
  if (!tree) {
    return next(new AppError('No tree found with that ID', 404, res));
  }
  const user = await User.findById(tree.user);
  if (!user) {
    return next(new AppError('No user found with that ID', 404, res));
  }
  user.score = user.score - 10;
  await user.save();
  res.status(200).json({ tree });
});
