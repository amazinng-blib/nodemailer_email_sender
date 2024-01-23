const express = require('express');
const sendMessage = require('../email');

const route = express.Router();

route.post('/send-mail', async (req, res) => {
  try {
    const { name, email, message } = req?.body;
    console.log({ name, email, message });

    if ((name, email, message)) {
      sendMessage(email, name, message);
      return res.status(200).json({ message: 'Message Sent' });
    }

    return res
      .status(400)
      .json({ message: 'Please, fill-out the form and send' });
  } catch (error) {
    res.status(500).json(error?.message);
  }
});

module.exports = route;
