
//routes/user.js

const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/', (req, res) => {
    res.send({
        user: {
            email: 'test@fusionauthserver.io'
        }
    });
});

module.exports = router;