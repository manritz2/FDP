const express = require('express');
const router = express.Router();

// Sample orders array
let orders = [];

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// POST create order
router.post('/', (req, res) => {
  const { items, userId } = req.body;
  if (!items || items.length === 0 || !userId) return res.status(400).json({ error: 'Items and userId required' });

  const newOrder = { id: orders.length + 1, userId, items, createdAt: new Date() };
  orders.push(newOrder);
  res.json({ message: 'Order created', order: newOrder });
});

module.exports = router;
