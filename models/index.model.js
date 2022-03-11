const mongoose = require('mongoose');
const Schema = mongoose.Schema

NewSchema = new Schema ({
    name : String,
    age: Number,
    email: String,
    phone_Number: Number,
}) 

module.exports = mongoose.model('User', NewSchema)