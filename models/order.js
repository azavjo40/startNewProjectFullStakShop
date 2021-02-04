//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    itemsOrder: {},
    itemsAddress: {}
})
module.exports = model('OrderSchema', orderSchema)