const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/ask', queryController.handleQuery);

module.exports = router;