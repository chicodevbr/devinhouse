const express = require('express');
const controller = require('../controllers/list');

const router = express.Router();

router.patch('/', controller.updateList);

module.exports = router;
