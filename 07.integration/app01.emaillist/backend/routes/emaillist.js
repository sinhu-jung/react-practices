const express = require('express');
const controller = require('../controllers/emaillist');

const rouetr = express.Router();
router.route('').get(controller.readAll());

module.exports = router;