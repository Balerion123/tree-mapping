import express from 'express';
import {
  getMyProfile,
  test,
  getAllTrees,
  createEvent,
  findEvents,
  findAllEvents,
  getAllMappedTrees,
  getEventByID,
  leaderboard,
  tagTree,
} from '../controllers/userController.js';
import { protect, getMe } from './../controllers/authController.js';

const router = express.Router();

router.get('/test', test);

// USER MUST BE LOGGED IN TO ACCESS THE FOLLOWING ROUTES
router.use(protect);

router.get('/getAllTrees', getAllTrees);
router.get('/getMyProfile', getMe, getMyProfile);
router.get('/getEvent', getEventByID);
router.get('/leaderboard', leaderboard);
router.post('/findAllEvents', findAllEvents);
router.post('/findEvents', findEvents);
router.post('/getMappedTrees', getAllMappedTrees);
router.post('/createEvent', getMe, createEvent);
router.post('/tagTree', getMe, tagTree);

export default router;
