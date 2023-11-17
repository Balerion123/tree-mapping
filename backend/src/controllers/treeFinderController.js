import MappedTree from '../models/mappedTreeModel.js';
import catchAsync from '../utils/catchAsync.js';

export const showAllUnidentifiedTrees = catchAsync(async (req, res, next) => {
  const trees = await MappedTree.find({ tree: null });
  res.status(200).json({ trees });
});

export const updateUnindentifiedTree = catchAsync(async (req, res, next) => {
  const tree = await MappedTree.findByIdAndUpdate(req.params.id, {
    tree: req.body.tree,
  });
  res.status(200).json({ tree });
});
