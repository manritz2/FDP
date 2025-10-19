const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const FoodItem = require('./models/FoodItem');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.log('Error:', err));

const restaurants = [
  {
    name: 'Spice Kingdom',
    description: 'Authentic North Indian Cuisine',
    cuisine: ['North Indian', 'Mughlai'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    rating: 4.5,
    deliveryTime: '30-35 mins',
    address: 'MG Road, Bangalore',
    minOrder: 100,
    deliveryFee: 30
  },
  {
    name: 'Dosa Corner',
    description: 'Best South Indian Delicacies',
    cuisine: ['South Indian'],
    image: 'https://images.unsplash.com/photo-1589301773177-94c88a7d5c31?w=800',
    rating: 4.7,
    deliveryTime: '25-30 mins',
    address: 'Indiranagar, Bangalore',
    minOrder: 80,
    deliveryFee: 20
  },
  {
    name: 'Punjab Grill',
    description: 'Royal Punjabi Flavors',
    cuisine: ['North Indian', 'Punjabi'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
    rating: 4.6,
    deliveryTime: '35-40 mins',
    address: 'Koramangala, Bangalore',
    minOrder: 150,
    deliveryFee: 40
  },
  {
    name: 'Biryani House',
    description: 'Hyderabadi Biryani Specialists',
    cuisine: ['Hyderabadi', 'Mughlai'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
    rating: 4.8,
    deliveryTime: '40-45 mins',
    address: 'HSR Layout, Bangalore',
    minOrder: 120,
    deliveryFee: 35
  },
  {
    name: 'Chaat Street',
    description: 'Mumbai Style Street Food',
    cuisine: ['Street Food', 'Chaat'],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800',
    rating: 4.3,
    deliveryTime: '20-25 mins',
    address: 'Jayanagar, Bangalore',
    minOrder: 60,
    deliveryFee: 15
  },
  {
    name: 'Curry Palace',
    description: 'Multi-Cuisine Indian Restaurant',
    cuisine: ['North Indian', 'South Indian', 'Chinese'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    rating: 4.4,
    deliveryTime: '30-35 mins',
    address: 'Whitefield, Bangalore',
    minOrder: 100,
    deliveryFee: 30
  }
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Restaurant.deleteMany({});
    await FoodItem.deleteMany({});
    console.log('Cleared existing data');

    // Insert restaurants
    const insertedRestaurants = await Restaurant.insertMany(restaurants);
    console.log('Restaurants added:', insertedRestaurants.length);

    // Create food items for each restaurant
    const foodItems = [];

    // Spice Kingdom (North Indian)
    const spiceKingdom = insertedRestaurants[0];
    foodItems.push(
      { name: 'Butter Chicken', description: 'Creamy tomato-based curry with tender chicken', price: 320, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400', category: 'main', restaurant: spiceKingdom._id, isVeg: false, spiceLevel: 'Medium', cuisine: 'North Indian', popular: true, rating: 4.8 },
      { name: 'Paneer Tikka Masala', description: 'Grilled cottage cheese in rich gravy', price: 280, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', category: 'main', restaurant: spiceKingdom._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'North Indian', popular: true, rating: 4.7 },
      { name: 'Dal Makhani', description: 'Slow-cooked black lentils with butter', price: 200, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', category: 'main', restaurant: spiceKingdom._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'North Indian', rating: 4.6 },
      { name: 'Tandoori Roti', description: 'Clay oven baked Indian bread', price: 30, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', category: 'starter', restaurant: spiceKingdom._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'North Indian', rating: 4.5 },
      { name: 'Chicken Seekh Kebab', description: 'Minced chicken grilled on skewers', price: 260, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', category: 'starter', restaurant: spiceKingdom._id, isVeg: false, spiceLevel: 'Spicy', cuisine: 'Mughlai', popular: true, rating: 4.7 }
    );

    // Dosa Corner (South Indian)
    const dosaCorner = insertedRestaurants[1];
    foodItems.push(
      { name: 'Masala Dosa', description: 'Crispy rice crepe with spiced potato filling', price: 80, image: 'https://images.unsplash.com/photo-1589301773177-94c88a7d5c31?w=400', category: 'main', restaurant: dosaCorner._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'South Indian', popular: true, rating: 4.9 },
      { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil curry', price: 60, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400', category: 'main', restaurant: dosaCorner._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'South Indian', popular: true, rating: 4.7 },
      { name: 'Medu Vada', description: 'Crispy lentil donuts', price: 50, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', category: 'starter', restaurant: dosaCorner._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'South Indian', rating: 4.5 },
      { name: 'Filter Coffee', description: 'Traditional South Indian filter coffee', price: 40, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400', category: 'beverage', restaurant: dosaCorner._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'South Indian', rating: 4.8 },
      { name: 'Uttapam', description: 'Thick pancake with vegetables', price: 90, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400', category: 'main', restaurant: dosaCorner._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'South Indian', rating: 4.6 }
    );

    // Punjab Grill (Punjabi)
    const punjabGrill = insertedRestaurants[2];
    foodItems.push(
      { name: 'Sarson da Saag with Makki di Roti', description: 'Mustard greens with cornflour bread', price: 250, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400', category: 'main', restaurant: punjabGrill._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'Punjabi', popular: true, rating: 4.8 },
      { name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', price: 150, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400', category: 'main', restaurant: punjabGrill._id, isVeg: true, spiceLevel: 'Spicy', cuisine: 'Punjabi', popular: true, rating: 4.9 },
      { name: 'Amritsari Kulcha', description: 'Stuffed bread from Amritsar', price: 120, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', category: 'starter', restaurant: punjabGrill._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'Punjabi', rating: 4.7 },
      { name: 'Lassi', description: 'Traditional yogurt drink', price: 70, image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=400', category: 'beverage', restaurant: punjabGrill._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'Punjabi', popular: true, rating: 4.8 },
      { name: 'Tandoori Chicken', description: 'Clay oven roasted chicken', price: 350, image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400', category: 'main', restaurant: punjabGrill._id, isVeg: false, spiceLevel: 'Spicy', cuisine: 'Punjabi', popular: true, rating: 4.9 }
    );

    // Biryani House (Hyderabadi)
    const biryaniHouse = insertedRestaurants[3];
    foodItems.push(
      { name: 'Hyderabadi Chicken Biryani', description: 'Aromatic rice with spiced chicken', price: 280, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', category: 'main', restaurant: biryaniHouse._id, isVeg: false, spiceLevel: 'Spicy', cuisine: 'Hyderabadi', popular: true, rating: 4.9 },
      { name: 'Hyderabadi Veg Biryani', description: 'Fragrant rice with mixed vegetables', price: 220, image: 'https://images.unsplash.com/photo-1633945274309-c440f661a75e?w=400', category: 'main', restaurant: biryaniHouse._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'Hyderabadi', popular: true, rating: 4.7 },
      { name: 'Mutton Biryani', description: 'Tender mutton cooked with basmati rice', price: 350, image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400', category: 'main', restaurant: biryaniHouse._id, isVeg: false, spiceLevel: 'Extra Spicy', cuisine: 'Hyderabadi', popular: true, rating: 4.8 },
      { name: 'Raita', description: 'Yogurt with cucumber and spices', price: 60, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', category: 'starter', restaurant: biryaniHouse._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'Hyderabadi', rating: 4.5 },
      { name: 'Double Ka Meetha', description: 'Bread pudding in sweet milk', price: 100, image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400', category: 'dessert', restaurant: biryaniHouse._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'Hyderabadi', rating: 4.6 }
    );

    // Chaat Street (Street Food)
    const chaatStreet = insertedRestaurants[4];
    foodItems.push(
      { name: 'Pani Puri', description: 'Crispy shells with spiced water', price: 50, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', category: 'starter', restaurant: chaatStreet._id, isVeg: true, spiceLevel: 'Spicy', cuisine: 'Street Food', popular: true, rating: 4.8 },
      { name: 'Pav Bhaji', description: 'Spicy mashed vegetables with bread', price: 120, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', category: 'main', restaurant: chaatStreet._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'Street Food', popular: true, rating: 4.7 },
      { name: 'Vada Pav', description: 'Spicy potato fritter in bread bun', price: 40, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', category: 'starter', restaurant: chaatStreet._id, isVeg: true, spiceLevel: 'Spicy', cuisine: 'Street Food', popular: true, rating: 4.6 },
      { name: 'Bhel Puri', description: 'Puffed rice with vegetables and chutney', price: 60, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', category: 'starter', restaurant: chaatStreet._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'Street Food', rating: 4.5 },
      { name: 'Dahi Puri', description: 'Crispy shells with yogurt and chutney', price: 70, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400', category: 'starter', restaurant: chaatStreet._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'Street Food', rating: 4.7 }
    );

    // Curry Palace (Multi-Cuisine)
    const curryPalace = insertedRestaurants[5];
    foodItems.push(
      { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', price: 240, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', category: 'main', restaurant: curryPalace._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'North Indian', popular: true, rating: 4.7 },
      { name: 'Chicken Manchurian', description: 'Indo-Chinese chicken in spicy sauce', price: 260, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400', category: 'main', restaurant: curryPalace._id, isVeg: false, spiceLevel: 'Spicy', cuisine: 'Chinese', popular: true, rating: 4.6 },
      { name: 'Hakka Noodles', description: 'Stir-fried noodles with vegetables', price: 180, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400', category: 'main', restaurant: curryPalace._id, isVeg: true, spiceLevel: 'Medium', cuisine: 'Chinese', rating: 4.5 },
      { name: 'Gulab Jamun', description: 'Sweet milk dumplings in syrup', price: 80, image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400', category: 'dessert', restaurant: curryPalace._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'North Indian', popular: true, rating: 4.8 },
      { name: 'Masala Chai', description: 'Spiced Indian tea', price: 30, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400', category: 'beverage', restaurant: curryPalace._id, isVeg: true, spiceLevel: 'Mild', cuisine: 'North Indian', rating: 4.6 }
    );

    // Insert all food items
    const insertedFoodItems = await FoodItem.insertMany(foodItems);
    console.log('Food items added:', insertedFoodItems.length);

    console.log('✅ Database seeded successfully!');
    console.log(`Added ${insertedRestaurants.length} restaurants`);
    console.log(`Added ${insertedFoodItems.length} food items`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
