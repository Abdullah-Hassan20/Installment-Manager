import express from 'express';
import addUser from './add.js';
import searchUser from './search.js';
import deleteUser from './delete.js';
import allUsers from './all.js';
import updateUser from './update.js';

const router = express.Router();

router.use(addUser);
router.use(searchUser);
router.use(deleteUser);
router.use(allUsers);
router.use(updateUser);

export default router;