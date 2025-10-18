const express = require('express');
const router = express.Router();

// Sample items
let foodItems = [
  { id: 1, name: 'Pizza', price: 299 },
  { id: 2, name: 'Burger', price: 149 },
  { id: 3, name: 'Pasta', price: 199 }
];

// GET all items
router.get('/', (req, res) => {
  res.json(foodItems);
});

// POST item (optional: admin only, need JWT auth middleware)
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ error: 'Name and price required' });

  const newItem = { id: foodItems.length + 1, name, price };
  foodItems.push(newItem);
  res.json(newItem);
});

module.exports = router;
