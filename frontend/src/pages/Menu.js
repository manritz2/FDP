import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import api from '../api/axios';

const Menu = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedItems, setAddedItems] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();

  const categories = ['All', 'Pizza', 'Burgers', 'Salads', 'Desserts', 'Drinks'];

  useEffect(() => {
    api.get('/items')
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ id: item._id, ...item }));
    setAddedItems(prev => new Set([...prev, item._id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item._id);
        return newSet;
      });
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">🍔</div>
          <p className="text-xl font-semibold text-gray-700">Finding delicious food...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Filters */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Restaurants and cafes
          </h1>
          
          {/* Category Filter */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🍽️</span>
            <p className="text-2xl text-gray-600 mb-2">No items available</p>
            <p className="text-gray-500">Check back soon for delicious options!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div 
                key={item._id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {/* Image */}
                <div className="relative h-52 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-8xl">
                    {item.name.toLowerCase().includes('pizza') ? '🍕' :
                     item.name.toLowerCase().includes('burger') ? '🍔' :
                     item.name.toLowerCase().includes('pasta') ? '🍝' :
                     item.name.toLowerCase().includes('salad') ? '🥗' :
                     item.name.toLowerCase().includes('dessert') ? '🍰' : '🍽️'}
                  </span>
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    20% OFF
                  </div>
                </div>
                
                <div className="p-4">
                  {/* Rating & Info */}
                  <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-semibold">4.3</span>
                    </span>
                    <span>•</span>
                    <span>25-30 min</span>
                    <span>•</span>
                    <span>$2 delivery</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{item.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description || 'Delicious food prepared with fresh ingredients'}
                  </p>
                  
                  {/* Price & Add Button */}
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">
                        ${item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                        addedItems.has(item._id)
                          ? 'bg-green-500 text-white'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      {addedItems.has(item._id) ? (
                        <span className="flex items-center gap-1">
                          <span>✓</span> Added
                        </span>
                      ) : (
                        'Add'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
