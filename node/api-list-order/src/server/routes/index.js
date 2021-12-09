const express = require('express');

const router = express.Router();
const controller = require('../controllers/list');

router.get('/', (req, res) => {
  console.log('API version 1.0.0');
  res.send('Welcome to our api.');
});

router.patch('/list', controller.updateList);

router.get('/date', controller.getDate);

module.exports = router;
