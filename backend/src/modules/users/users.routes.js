const express = require('express');
const controller = require('./users.controller');
const auth = require('../../middleware/auth.middleware');
const role = require('../../middleware/role.middleware');

const router = express.Router();

router.use(auth);

router.get('/', role('admin'), controller.list);
router.post('/', role('admin'), controller.create);

module.exports = router;
