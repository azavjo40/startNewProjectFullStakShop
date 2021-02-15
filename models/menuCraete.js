//@ts-check
const { Schema, model } = require("mongoose");
const menuCreate = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  p: { type: String, required: true },
  ifKebab: {},
  imageSrc: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: String },
});
module.exports = model("menuCrete", menuCreate);
