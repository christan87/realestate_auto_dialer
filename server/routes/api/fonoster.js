const express = require('express');
const router = express.Router();
// const { Fonoster } = require('@fonoster/sdk');
const keys = require('../../config/keys');
const { fonosterKeys } = keys;

// Send text message route
router.post('/send-text', async (req, res) => {
  const { recipient, textMessage } = req.body;
    console.log('=============>Made it to route!')
  try {
    // Initialize Fonoster client
    const fonoster = new Fonoster({
      apiKey: fonosterKeys.fonosterAccessKeyId,
      apiSecret: fonosterKeys.fonosterAccessKeySecret,
    });

    // Send the text message
    await fonoster.sendSMS({
      to: recipient,
      text: textMessage,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending text message:', error);
    res.status(500).json({ success: false, error: 'Failed to send text message' });
  }
});

module.exports = router;