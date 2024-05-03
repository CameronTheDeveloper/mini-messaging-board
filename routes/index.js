const express = require('express');
const router = express.Router();
const messages = [
  {
    user: "Jason",
    message: "Hello, I enjoy computers.",
    when: new Date()
  },
  {
    user: "Michelle",
    message: "Hello World!",
    when: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
