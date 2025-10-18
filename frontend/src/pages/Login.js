import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full animate-scale-in">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden glass">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">🔑 Login</h1>
            <p className="text-blue-100">Welcome back! Please login to continue</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-6 animate-fade-in">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-in">
                <label className="block text-gray-700 font-semibold mb-2">
                  📧 Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-300 p-4 rounded-xl focus:border-purple-600 focus:outline-none transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="animate-slide-in" style={{animationDelay: '0.1s'}}>
                <label className="block text-gray-700 font-semibold mb-2">
                  🔒 Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-300 p-4 rounded-xl focus:border-purple-600 focus:outline-none transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-bold hover-lift shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⌛</span> Logging in...
                  </span>
                ) : (
                  'Login'
                )}
              </button>
            </form>
            
            <p className="mt-6 text-center text-gray-600 animate-fade-in">
              Don't have an account?{' '}
              <a href="/register" className="text-purple-600 font-bold hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
