const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

mongoose.connect(config.database);

//confirm in console
mongoose.connection.on('connected', () => {
    console.log('Connected to db' + config.database)
});

mongoose.connection.on('error', (err) => {
    console.log('Error: ' + err)
});

const app = express();

const users = require('./routes/users');
const news = require('./routes/news');


const port = 4500;

app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/users', users);
app.use('/news', news);

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/videos', (req, res) => {
    res.sendFile(path.join(__dirname, 'videos.html'))
});

app.get('/recruitment', (req, res) => {
    res.sendFile(path.join(__dirname, 'recruitment.html'))
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});







app.listen(process.env.PORT || port, () => {
    console.log('server started on port' + port)
});