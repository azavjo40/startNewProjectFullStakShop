//@ts-check
const { Schema, model } = require('mongoose')
const menuCreate = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    p: { type: String, required: true },
    imageSrc: { type: String, required: true },
    date: { type: Date, default: Date.now }
})
module.exports = model('menuCrete', menuCreate)