//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    order: []
})
module.exports = model('OrderSchema', orderSchema)