const express = require('express');
const router = express.Router();

// Bring in Models and Helpers
const Contact = require('../../models/contact');

//add contact
router.post('/add', auth, async (req, res) => {
    try {
        const contact = new Contact({
            ...req.body
        });
        
        const contactDoc = await contact.save();
        
        res.status(200).json({
            success: true,
            message: 'Contact has been added successfully',
            contact: contactDoc
        });

    } catch (error) {
        res.status(400).json({
            error: 'Your Contact add request could not be processed. Please try again.'
        });
    }
});


router.get('/', auth, async (req, res) => {
    try {
        const user = req.user._id;
        const userDoc = await User.findById(user, { password: 0 });
        res.status(200).json({
            user: userDoc
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again'
        });
    }
});

router.put('/', auth, async (req, res) => {
    try {
        const user = req.user._id;
        const update = req.body.profile;
        const query = { _id: user };

        const userDoc = await User.findOneAndUpdate(query, update, { new: true});

        res.status(200).json({
            success: true,
            message: 'Your profile has been successfully udated!',
            user: userDoc
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your profile has "not" been udated. Please try again.'
        });
    }
});

module.exports = router;