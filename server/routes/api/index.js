const router = require('express').Router();

const contactRoutes = require('./contact');
const twilioRoutes = require('./twilio');


// auth routes
router.use('/contact', contactRoutes);
router.use('/twilio', twilioRoutes);

module.exports = router;