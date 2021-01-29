//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    menu: {}
})
module.exports = model('OrderSchema', orderSchema)