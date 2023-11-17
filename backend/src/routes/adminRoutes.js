import express from 'express';
import {
  addNewTreeFinder,
  showAllTreeFinders,
  getAllEvents,
  approveEvent,
  getPendingEvents,
  deleteEvent,
  listOfAllMappedTrees,
  deleteMappedTree,
} from '../controllers/adminController.js';
import { protect, getMe } from './../controllers/authController.js';

const router = express.Router();

router.post('/addNewTreeFinder', addNewTreeFinder);
router.get('/allTreeFinders', showAllTreeFinders);
router.get('/getAllEvents', getAllEvents);
router.get('/getPendingEvents', getPendingEvents);
router.patch('/approveEvent/:id', approveEvent);
router.get('/rejectEvent/:id', deleteEvent);
router.get('/MappedTrees', listOfAllMappedTrees);
router.get('/deleteMappedTree/:id', deleteMappedTree);

export default router;
