const mongoose = require('mongoose');
const config = require('../config/database');

// News Schema --

const NewsSchema = mongoose.Schema({
        date: {
            type: String
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }}, {
        versionKey: false
    }
);

const News = module.exports = mongoose.model('News', NewsSchema);

module.exports.getArticleById = (id, callback) => {
    News.findById(id, callback);
};


module.exports.addArticle = (newNews, callback) => {

    newNews.save(callback);
};
