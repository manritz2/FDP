const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const FoodItem = require('../models/FoodItem');

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ isOpen: true }).sort({ rating: -1 });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single restaurant with its menu
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const foodItems = await FoodItem.find({ 
      restaurant: req.params.id,
      isAvailable: true 
    }).sort({ popular: -1, rating: -1 });

    res.json({
      restaurant,
      menu: foodItems
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search restaurants by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ 
      cuisine: { $in: [req.params.cuisine] },
      isOpen: true 
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
