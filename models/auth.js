const mongoose = require('mongoose')
const userschema = mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    });
const User = mongoose.model('User', userschema);
module.exports = { User }