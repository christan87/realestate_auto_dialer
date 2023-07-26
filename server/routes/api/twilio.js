const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const { twilioKeys } = keys;
const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;
const autoText = require('../../services/autoText');

// twilio requirements -- Texting Api
const twilioAccountSid = twilioKeys.twilioAccountSid;
const twilioAuthToken = twilioKeys.twilioAuthToken;
const twilioApiKey = twilioKeys.twilioApiKey;
const twilioApiSecret = twilioKeys.twilioApiSecret;
const localTunnel = twilioKeys.localTunnel;
const twilioClient = new twilio(twilioAccountSid, twilioAuthToken, {
    voice: {
        applicationSid: 'AP3c33d4512c2bb4f1d934ee54901c6585'
      }
});

router.put('/send-text', async (req, res) => {
    try {
        console.log('server>routes>api>twilio>Success: Action has reached /send-text route!')
        console.log('twilioKeys.twilioNumber: ', twilioKeys.twilioNumber)
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

router.put('/send-auto-text', async (req, res) => {
  try {
      console.log('server>routes>api>twilio>Success: Action has reached /send-auto-text route!')
      console.log('twilioKeys.twilioNumber: ', twilioKeys.twilioNumber)
      // _Get Variables
      const recipient = req.body.recipient !== "" ? req.body.recipient : req.body.contact.phone1;
      const data = {
        firstName: req.body.contact.owner1FirstName,
        lastName: req.body.contact.owner1LastName,
        address:`${req.body.contact.fullMailAddress} ${req.body.contact.fullSiteAddress} ${req.body.contact.mailAddressState} ${req.body.contact.mailAddressZip}`
      }
      const demoMessage = await autoText.prepAutoText('demo', data); //message.text
      
      //Send Text
      twilioClient.messages.create({
          body: demoMessage.text,
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
        machineDetection: 'DetectMessageEnd',
        url: `${localTunnel}/api/twilio/twiml-call?recipient=` + recipientNumber,
        to: '+1'+recipientNumber,
        from: '+1 877 969 2103'
      })
      .then(call => {
        console.log('Call initiated successfully:', call.sid);
        res.status(200).json({ message: 'Call initiated successfully', call: call });
      })
      .catch(error => {
        console.error('Error initiating call:', error);
        res.status(500).json({ message: 'Failed to initiate call' });
      });
  });

  router.post('/twiml-call', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    const recipient = '+1'+req.query.recipient;
    const dial = twiml.dial();
    dial.number({    
      statusCallbackEvent: 'initiated ringing answered completed',
      statusCallback: '/api/twilio/events',
      statusCallbackMethod: 'POST'
  }, recipient); // Replace with the phone number of the person you want to call
    res.type('text/xml');
    console.log(twiml.toString())
    res.send(twiml.toString());
  });

  router.post('/events', (req, res) => {
    console.log('/events was reached!\n CallStatus:', req.body)
    res.status(200).send('Success');
  });
  router.post('/twiml-record', (req, res) => {
    // Get the recording information from the request body
    const recording = req.body;
  
    // Check to see if the recording is complete
    if (recording.status === 'completed') {
      // Send a success message
      res.status(200).send('Recording saved.');
    } else if (recording.status === 'absent') {
      // The recording was not created, so send an error message
      res.status(400).send('Recording was not created.');
    } else {
      // The recording is still in progress, so wait for it to complete
      // ...
    }
  });

module.exports = router;