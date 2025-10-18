const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },  // URL to image
  category: { type: String, default: 'main' }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
