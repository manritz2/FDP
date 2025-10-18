const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    foodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
    quantity: { type: Number, default: 1 },
    price: { type: Number }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  address: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
