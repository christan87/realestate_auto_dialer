const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const { twilioKeys } = keys;
const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;

// twilio requirements -- Texting Api
const twilioAccountSid = twilioKeys.twilioAccountSid;
const twilioAuthToken = twilioKeys.twilioAuthToken;
const twilioApiKey = twilioKeys.twilioApiKey;
const twilioApiSecret = twilioKeys.twilioApiSecret;
const twilioClient = new twilio(twilioAccountSid, twilioAuthToken, {
    voice: {
        applicationSid: 'AP3c33d4512c2bb4f1d934ee54901c6585'
      }
});

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

router.post('/voice', async (req, res) => {
    try {
      const twiml = new twilio.twiml.VoiceResponse();
      
      // Get the phone number of the recipient from the request
      const recipient = req.body.recipient;
      console.log(recipient)
      // Dial the recipient
      const dial = twiml.dial();
      
      dial.number('+1' + recipient);
      console.log("made it to call route")
      // Hang up the call when one participant ends it
      twiml.hangup();
  
      res.type('text/xml');
      res.send(twiml.toString());
    } catch (error) {
      res.status(400).json({
        error: 'Your Call request could not be processed. Please try again.',
      });
    }
});

router.post('/end-call', async (req, res) => {
    try {
        const twiml = new twilio.twiml.VoiceResponse();
        twiml.hangup();
        res.type('text/xml');
        res.send(twiml.toString());
    } catch (error) {
        res.status(400).json({
            error: 'Your Call request could not be processed. Please try again.'
        });
    }

});

// alt

router.get('/call', async (req, res) => {
    const  recipientNumber = req.query.recipient;
    twilioClient.calls
      .create({
        url: 'https://better-trains-build.loca.lt/api/twilio/twiml-call?recipient=' + recipientNumber,
        to: '+1'+recipientNumber,
        from: '+1 877 969 2103'
      })
      .then(call => {
        console.log('Call initiated successfully:', call.sid);
        res.status(200).json({ message: 'Call initiated successfully' });
      })
      .catch(error => {
        console.error('Error initiating call:', error);
        res.status(500).json({ message: 'Failed to initiate call' });
      });
  });

  router.get('/test', (req, res)=>{
    res.send('HELLO')
  })
  //alt alt
  router.post('/twiml-call', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    const recipient = '+1'+req.query.recipient;
    const dial = twiml.dial();
    dial.number(recipient); // Replace with the phone number of the person you want to call
  
    res.type('text/xml');
    console.log(twiml.toString())
    res.send(twiml.toString());
  });

module.exports = router;