const {Schema, model} = require('mongoose')


const userSchema =  new Schema({
name: {type: String, required: true},
phone: {type: String, required: true},
mail: {type: String, required: true},
password: {type: String, required:true},
date: {type: Date, default: Date.now}
})
module.exports = model('User', userSchema)