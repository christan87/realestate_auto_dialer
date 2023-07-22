const express = require('express');
const router = express.Router();

const sendGrid = require('../../services/sendgrid');

router.post('/auto-response', async (req, res) => {
    const email = req.body.email;

    if(!email) {
        return res.status(400).json({error: 'You must enter an email address'});
    }

    await sendGrid.sendMail('demo', email.recipient, email.sender, email.data);
    res.status(200).json({
        success: true,
        message: 'Email sent!'
    });
});

module.exports = router