const express = require('express');
const controller = require('./system.controller');

const router = express.Router();

router.get('/health', controller.health);

module.exports = router;
