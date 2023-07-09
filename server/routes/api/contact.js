const express = require('express');
const router = express.Router();

// Bring in Models and Helpers
const Contact = require('../../models/contact');

// fetch all contacts
router.get('/', async (req, res) => {
    try {
        const contactsDoc = await Contact.find();
        return res.status(200).json({
            success: true,
            message: 'Contacts have been successfully retrieved.',
            contacts: contactsDoc
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your Contact request could not be processed. Please try again.'
        }); 
    }
});

// fetch specific contact
router.get('/:id', async (req, res) => {
    try {
        
        const contactId = req.params.id;
        const contactDoc = await Contact.findById(contactId);
        return res.status(200).json({
            success: true,
            message: 'Contact has been successfully retrieved.',
            contact: contactDoc
        })
    } catch (error) {
        console.log('server>routes>api>contact.js>Error: ', error)
        res.status(400).json({
            error: 'Your Contact request could not be processed. Please try again.'
        }); 
    }
});

// add contact
router.post('/add', async (req, res) => {
    try {
        const contact = new Contact({
            ...req.body
        });
        
        const contactDoc = await contact.save();
        
        return res.status(200).json({
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

module.exports = router;