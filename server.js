const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname)));

app.get('/videos', (req, res) => {
    res.sendFile(path.join(__dirname, 'videos.html'))
});

app.get('/recruitment', (req, res) => {
    res.sendFile(path.join(__dirname, 'recruitment.html'))
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'template.html'));
});

app.listen(process.env.PORT || port);