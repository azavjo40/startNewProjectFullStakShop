//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    form: { type: String }
})
module.exports = model('OrderSchema', orderSchema)