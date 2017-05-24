const express = require('express');
const router = express.Router();
const passport = require('passport');

const config = require('../config/database');


router.get('/', (req,res) => {
    app.use(express.static(path.join(__dirname, 'public')));
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = router;