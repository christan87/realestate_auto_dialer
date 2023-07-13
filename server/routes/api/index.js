const router = require('express').Router();

const contactRoutes = require('./contact');
const twilioRoutes = require('./twilio');
const fonosterRoutes = require('./fonoster')


// auth routes
router.use('/contact', contactRoutes);
router.use('/twilio', twilioRoutes);
router.use('/fonoster', fonosterRoutes);

module.exports = router;