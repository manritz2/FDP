const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  cuisine: { type: [String], required: true }, // e.g., ['North Indian', 'South Indian']
  image: { type: String },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  deliveryTime: { type: String, default: '30-40 mins' },
  address: { type: String },
  isOpen: { type: Boolean, default: true },
  minOrder: { type: Number, default: 0 },
  deliveryFee: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
