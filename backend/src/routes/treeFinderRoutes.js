import express from 'express';
import { showAllUnidentifiedTrees, updateUnindentifiedTree } from '../controllers/treeFinderController.js';

const router = express.Router();

router.get('/getTrees', showAllUnidentifiedTrees);
router.post('/updateTree/:id', updateUnindentifiedTree);

export default router;
