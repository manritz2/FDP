const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');
const Restaurant = require('../models/Restaurant');

// GET all items (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { category, restaurant, isVeg, cuisine } = req.query;
    const filter = { isAvailable: true };
    
    if (category) filter.category = category;
    if (restaurant) filter.restaurant = restaurant;
    if (isVeg) filter.isVeg = isVeg === 'true';
    if (cuisine) filter.cuisine = cuisine;

    const items = await FoodItem.find(filter)
      .populate('restaurant', 'name deliveryTime rating')
      .sort({ popular: -1, rating: -1 });
    
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single item
router.get('/:id', async (req, res) => {
  try {
    const item = await FoodItem.findById(req.params.id)
      .populate('restaurant');
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET popular items
router.get('/popular/all', async (req, res) => {
  try {
    const items = await FoodItem.find({ popular: true, isAvailable: true })
      .populate('restaurant', 'name deliveryTime rating')
      .limit(10)
      .sort({ rating: -1 });
    
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
