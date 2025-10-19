const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    foodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
    quantity: { type: Number, default: 1 },
    price: { type: Number }
  }],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
    default: 'Pending' 
  },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  deliveryFee: { type: Number, default: 0 },
  estimatedDeliveryTime: { type: String },
  paymentMethod: { type: String, enum: ['Cash', 'Card', 'UPI'], default: 'Cash' },
  paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
  deliveryInstructions: { type: String },
  statusHistory: [{
    status: String,
    timestamp: { type: Date, default: Date.now },
    note: String
  }]
}, { timestamps: true });

// Middleware to track status changes
orderSchema.pre('save', function(next) {
  if (this.isModified('status')) {
    this.statusHistory.push({
      status: this.status,
      timestamp: new Date(),
      note: `Order ${this.status.toLowerCase()}`
    });
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
