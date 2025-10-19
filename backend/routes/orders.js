const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// GET all orders for a user
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('restaurant', 'name image deliveryTime')
      .populate('items.foodItem', 'name price image')
      .sort({ createdAt: -1 });
    
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single order
router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('restaurant')
      .populate('items.foodItem')
      .populate('user', 'name email');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    // Check if order belongs to the user
    if (order.user._id.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create order
router.post('/', auth, async (req, res) => {
  try {
    const { restaurant, items, totalAmount, address, phone, deliveryInstructions, paymentMethod } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    
    const order = new Order({
      user: req.user.id,
      restaurant,
      items,
      totalAmount,
      address,
      phone,
      deliveryInstructions,
      paymentMethod,
      estimatedDeliveryTime: '30-40 mins',
      statusHistory: [{
        status: 'Pending',
        timestamp: new Date(),
        note: 'Order placed successfully'
      }]
    });
    
    await order.save();
    
    const populatedOrder = await Order.findById(order._id)
      .populate('restaurant', 'name image')
      .populate('items.foodItem', 'name price image');
    
    res.status(201).json({ 
      message: 'Order placed successfully', 
      order: populatedOrder 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH update order status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    order.status = status;
    await order.save();
    
    res.json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
