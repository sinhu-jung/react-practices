const express = require('express');
const controller = require('../controller/guestbook-api');

const router = express.Router();
router.route('/read').get(controller.read);
router.route('/read/:no').get(controller.read);
router.route('/:no').delete(controller.delete);
router.route('').post(controller.create);

module.exports = router;