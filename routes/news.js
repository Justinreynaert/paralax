const express = require('express');
const router = express.Router();
const passport = require('passport');

//const jwt = require('jsonwebtoken');

const config = require('../config/database');


const News = require('../models/news');


//register
router.post('/addArticle', /*passport.authenticate('jwt', {session:false}),*/ (req, res, next) => {

    let newArticle = new News({
        date: JSON.stringify(Date.now()),
        title: req.body.title,
        content: req.body.content
    });

    News.addArticle(newArticle, (err, article) => {

        if(err){

            //console.log(err);
            res.json({success:false, msg:'failed to add new article'});
        } else {
            res.json({success:true, msg:'article has been submitted'});
    }
    });



});

module.exports = router;