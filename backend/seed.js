const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');
mongoose.connect('mongodb://localhost:27017/foodordering');

const items = [
  { name: 'Pizza', description: 'Cheese Pizza', price: 10, category: 'main' },
  { name: 'Burger', description: 'Beef Burger', price: 8, category: 'main' },
  // Add more...
];

FoodItem.insertMany(items).then(() => {
  console.log('Seeded!');
  mongoose.connection.close();
});
