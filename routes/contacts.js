const express = require('express');
const router = express.Router()

// @route  GET api/contacts
// @desc    Get all users contact
// @access  Private
router.get('/',(req, res) => {
    res.send('add COntact')
});
// @route  GET api/contacts
// @desc    Get all users contact
// @access  Private
router.post('/',(req, res) => {
    res.send('add COntact')
});
// @route  PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/',(req, res) => {
    res.send('Update contact')
});
// @route  PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.delete('/:id',(req, res) => {
    res.send('Delete contact')
});

module.exports = router;