const express = require('express');
const router = express.Router();
const controller = require('../controllers/messagesController');

/* GET home page. */
router.get('/', controller.messages_list);

router.get('/new', controller.message_create_get);
router.post('/new', controller.message_create_post);

module.exports = router;
