const express = require('express');
const systemRoutes = require('../modules/system/system.routes');

const router = express.Router();

// Health & system routes
router.use('/system', systemRoutes);

module.exports = router;
