const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },  // URL to image
  category: { type: String, default: 'main' }, // e.g., 'starter', 'main', 'dessert', 'beverage'
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  isVeg: { type: Boolean, default: true },
  spiceLevel: { type: String, enum: ['Mild', 'Medium', 'Spicy', 'Extra Spicy'], default: 'Medium' },
  cuisine: { type: String }, // e.g., 'North Indian', 'South Indian', 'Chinese', 'Continental'
  isAvailable: { type: Boolean, default: true },
  preparationTime: { type: String, default: '15-20 mins' },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  popular: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('FoodItem', foodItemSchema);
