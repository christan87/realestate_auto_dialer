const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const { twilioKeys } = keys;
const twilio = require('twilio');
// twilio requirements -- Texting Api
const twilioAccountSid = twilioKeys.twilioAccountSid;
const twilioAuthToken = twilioKeys.twilioAuthToken;
const twilioClient = new twilio(twilioAccountSid, twilioAuthToken);

router.put('/send-text', async (req, res) => {
    try {
        console.log('server>routes>api>twilio>Success: Action has reached /send-text route!')
        // _Get Variables
        const recipient = req.body.recipient;
        const textMessage = req.body.textMessage;
    
        //Send Text
        twilioClient.messages.create({
            body: textMessage,
            to: '+1'+recipient,
            from: twilioKeys.twilioNumber
        }).then((message) => {
            console.log(message.body);
        });

    } catch (error) {
        console.log('server>routes>api>twilio.js>/send-text>Error: ', error);
        res.status(400).json({
            error: 'Your Message request could not be processed. Please try again.'
        });
    }

});

module.exports = router;