const router = require('express').Router();

const contactRoutes = require('./contact');
const twilioRoutes = require('./twilio');
const emailRoutes = require('./email')


// auth routes
router.use('/contact', contactRoutes);
router.use('/twilio', twilioRoutes);
router.use('/email', emailRoutes);

module.exports = router;