//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    itemsOrder: [
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String },
        { name: String, p: String, cost: Number, sos: String }
    ],
    itemsAddress: {}
})
module.exports = model('OrderSchema', orderSchema)