//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    itemsOrder: {},
    itemsAddress: {},
    date: { type: Date, default: Date.now }
})
module.exports = model('OrderSchema', orderSchema)