//@ts-check
const { model, Schema } = require('mongoose')
const orderSchema = new Schema({
    form: []
})
module.exports = model('OrderSchema', orderSchema)