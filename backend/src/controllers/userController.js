import User from '../models/userModel.js';
import Event from '../models/eventModel.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';
import Tree from '../models/treeModel.js';
import MappedTree from '../models/mappedTreeModel.js';

export const test = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'API is working',
  });
};

export const getAllTrees = catchAsync(async (req, res, next) => {
  const trees = await Tree.find();

  res.status(200).json({
    status: 'success',
    trees,
  });
});

export const getMyProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new AppError('User not found', 401, res));

  res.status(200).json({
    status: 'success',
    user,
  });
});

export const findAllEvents = catchAsync(async (req, res, next) => {
  const { coordinates } = req.body;

  let events = await Event.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [coordinates.x, coordinates.y] },
        distanceField: 'dist.calculated',
        includeLocs: 'dist.location',
        spherical: true,
        key: 'location',
      },
    },
    {
      $limit: 50,
    },
    {
      $match: {
        approved: true,
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    events,
  });
});

export const findEvents = catchAsync(async (req, res, next) => {
  const { coordinates } = req.body;

  let events = await Event.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [coordinates.x, coordinates.y] },
        distanceField: 'dist.calculated',
        includeLocs: 'dist.location',
        spherical: true,
        key: 'location',
      },
    },
    {
      $limit: 20,
    },
    {
      $match: {
        date: { $gt: new Date() },
        approved: true,
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    events,
  });
});

export const createEvent = catchAsync(async (req, res, next) => {
  const { name, radius, address, coordinates, description, date } = req.body;

  const location = {
    type: 'Point',
    coordinates,
    address,
  };

  await Event.create({
    name,
    location,
    radius,
    description,
    date,
  });

  res.status(200).json({
    status: 'success',
    message: 'Event request has been sent to admin',
  });
});

export const getAllMappedTrees = catchAsync(async (req, res, next) => {
  const { coordinates } = req.body;

  const mappedTrees = await MappedTree.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [coordinates.x, coordinates.y] },
        distanceField: 'dist.calculated',
        includeLocs: 'dist.location',
        spherical: true,
        key: 'location',
      },
    },
    {
      $limit: 20,
    },
  ]);

  res.status(200).json({
    status: 'success',
    mappedTrees,
  });
});

export const getEventByID = catchAsync(async (req, res, next) => {
  const { eventID } = req.query;

  const event = await Event.findById(eventID);
  if (!event) return next(new AppError('no such event exists', 400, res));

  res.status(200).json({
    status: 'success',
    event,
  });
});

export const leaderboard = catchAsync(async (req, res, next) => {
  const leaderboard = await User.find().sort({ score: -1 });

  res.status(200).json({
    status: 'success',
    leaderboard,
  });
});

export const tagTree = catchAsync(async (req, res, next) => {
  const { treeID, coordinates, quantity, image } = req.body;

  const location = {
    type: 'Point',
    coordinates,
  };

  const user = await User.findById(req.params.id);
  if (!treeID) user.score += 5;
  else user.score += 10;

  await user.save();

  const mappedTree = await MappedTree.create({
    user: req.params.id,
    tree: treeID,
    location,
    quantity,
    image,
  });

  res.status(200).json({
    status: 'success',
    message: 'tree has been successfully mapped',
    mappedTree,
  });
});
