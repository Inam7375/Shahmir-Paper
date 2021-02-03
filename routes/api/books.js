const express = require('express');
const Books = require('../../models/Books');

const router = express.Router()



router.get('/', async (req, res) => {
    try {
        const bookName = 'Your Book Name Here'
        const book = await Books.findOne({'author': bookName})
        if (!book) {
            res.send('No book found')
        } else {
            res.json({book})
        }
    } catch (err) {
        res.status(400).json({msg: "Invalid authentication request"});
    }

})

module.exports = router;