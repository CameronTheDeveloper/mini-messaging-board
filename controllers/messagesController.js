const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

exports.messages_list = asyncHandler(async (req, res, next) => {
    const messages = await db.getAllMessages();

    res.render('index', {
        title: 'Message Board',
        messages: messages
    });
});

exports.message_create_get = asyncHandler(async (req, res, next) => {
    res.render('form');
});

exports.message_create_post = asyncHandler(async (req, res, next) => {
    const messageInfo = req.body;
    await db.insertMessage(messageInfo.nameInput, messageInfo.messageInput);
    res.redirect('/');
});