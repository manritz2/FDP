import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './utils/auth';
import { store } from './store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ReduxProvider>
    </AuthProvider>
  );
}

export default App;
