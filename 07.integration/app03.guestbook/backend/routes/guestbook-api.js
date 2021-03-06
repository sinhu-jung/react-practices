const express = require('express');
const controller = require('../controller/guestbook-api');

const router = express.Router();
router.route('/:startNo((\\d+)?)').get(controller.read);
router.route('/:no').delete(controller.delete);
router.route('').post(controller.create);

module.exports = router;