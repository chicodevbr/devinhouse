const express = require('express');

const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.index);
router.get('/date', controller.getDate);
router.get('/users', controller.getUsers);
router.put('/user/:id', controller.updateUser);
router.get('/user/:id', controller.getUsersById);
router.patch('/list', controller.updateList);
router.post('/folder', controller.createAndSaveFolder);
router.get('/filter', controller.getFilter);
module.exports = router;
