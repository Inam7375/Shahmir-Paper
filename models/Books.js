const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    }
})

module.exports = Books = mongoose.model('user', BooksSchema);