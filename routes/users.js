const express = require('express');
const router = express.Router()

// @route  POST api/users
// @desc    Regi
// @access  Public
router.post('/',(req, res) => {
    res.send('Register a users')
});

module.exports = router;