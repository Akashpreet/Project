const mongoose = require('mongoose')
const noteschema = mongoose.Schema(
    {
        title: String,
        status: String,
        desc: String,
        date:Date
    });
const Note = mongoose.model('Note', noteschema);
module.exports = { Note }