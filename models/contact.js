//@ts-check
const { Schema, model } = require('mongoose')
const contact = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    message: { type: String },
    date: { type: Date, default: Date.now }
})
module.exports = model('Contact', contact)