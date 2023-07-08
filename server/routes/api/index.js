const router = require('express').Router();

const contactRoutes = require('./contact');


// auth routes
router.use('/contact', contactRoutes);

module.exports = router;