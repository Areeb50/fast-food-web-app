const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., starters, mains
  dietary: [String], // e.g., ["vegetarian", "gluten-free"]
  description: String,
  image: String, // URL to image
});

module.exports = mongoose.model('MenuItem', menuItemSchema);