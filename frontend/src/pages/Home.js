import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Order food to your door
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover the best food & drinks in your city
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-2 animate-scale-in">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter your delivery address"
                className="flex-1 px-6 py-4 text-gray-800 outline-none rounded-full text-lg"
              />
              <Link 
                to="/menu"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover-scale"
              >
                Find Food
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { emoji: '🍕', name: 'Pizza', color: 'from-yellow-400 to-orange-500' },
            { emoji: '🍔', name: 'Burgers', color: 'from-red-400 to-pink-500' },
            { emoji: '🍜', name: 'Noodles', color: 'from-green-400 to-teal-500' },
            { emoji: '🍣', name: 'Sushi', color: 'from-blue-400 to-indigo-500' },
            { emoji: '🥗', name: 'Salads', color: 'from-lime-400 to-green-500' },
            { emoji: '🍰', name: 'Desserts', color: 'from-pink-400 to-purple-500' },
          ].map((category, index) => (
            <Link
              key={index}
              to="/menu"
              className="bg-white rounded-2xl p-6 text-center hover-lift cursor-pointer shadow-md hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-5xl mb-3 bg-gradient-to-br ${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                {category.emoji}
              </div>
              <h3 className="font-semibold text-gray-800">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Restaurants/Dishes */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Popular near you</h2>
            <Link to="/menu" className="text-orange-500 font-semibold hover:underline">
              See all →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <Link
                key={item}
                to="/menu"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-8xl">🍔</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      ⭐ 4.5
                    </span>
                    <span className="text-gray-500 text-sm">25-35 min</span>
                    <span className="text-gray-500 text-sm">• $3 delivery</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Delicious Burgers</h3>
                  <p className="text-gray-600 text-sm">American • Fast Food • Burgers</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Choose your location</h3>
            <p className="text-gray-600">Enter your address and we'll find the best restaurants nearby</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🛒</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Select your meal</h3>
            <p className="text-gray-600">Browse menus and add items to your cart</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Fast delivery</h3>
            <p className="text-gray-600">Get your order delivered fresh and hot to your door</p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 animate-scale-in">Join the Luffy crew! ⚓</h2>
          <p className="text-xl mb-8 opacity-90">Start your food adventure today</p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover-lift shadow-xl"
            >
              Sign up now
            </Link>
            <Link
              to="/menu"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover-lift"
            >
              Browse menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
