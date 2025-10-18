import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 hover-scale"
          >
            <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚓</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Luffy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Menu
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/orders" 
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  My Orders
                </Link>
                <Link 
                  to="/cart" 
                  className="relative text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <span className="text-2xl">🛒</span>
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    0
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 ml-4">
                  {user.isAdmin && (
                    <Link 
                      to="/admin" 
                      className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                    >
                      Admin
                    </Link>
                  )}
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button 
                    onClick={handleLogout} 
                    className="text-gray-600 hover:text-red-500 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/cart" 
                  className="relative text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <span className="text-2xl">🛒</span>
                </Link>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all hover-scale"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Home</Link>
              <Link to="/menu" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Menu</Link>
              <Link to="/cart" className="text-gray-700 hover:text-orange-500 py-2 font-medium">🛒 Cart</Link>
              {user ? (
                <>
                  <Link to="/orders" className="text-gray-700 hover:text-orange-500 py-2 font-medium">My Orders</Link>
                  {user.isAdmin && (
                    <Link to="/admin" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Admin</Link>
                  )}
                  <div className="flex items-center gap-2 py-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg text-left">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-orange-500 py-2 font-medium">Login</Link>
                  <Link to="/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-semibold">Sign up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
