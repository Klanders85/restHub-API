const mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
});

let Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.get = (callback, limit) => {
    Book.find(callback).limit(limit);
};