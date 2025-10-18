import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    // Redirect to orders or integrate payment
    navigate('/orders');  // For now, just go to orders
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between border p-4 mb-2">
          <span>{item.name} - Qty: {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
         