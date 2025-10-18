import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    api.get('/orders')
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        if (err.response?.status === 401) {
          navigate('/login');
        }
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading orders...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders yet. Start ordering from the menu!</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order._id} className="border rounded p-4 shadow">
              <div className="flex justify-between mb-2">
                <span className="font-bold">Order #{order._id.slice(-6)}</span>
                <span className="text-gray-600">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="mb-2">
                <strong>Items:</strong>
                <ul className="ml-4 mt-1">
                  {order.items?.map((item, idx) => (
                    <li key={idx}>
                      {item.name} x {item.qty} - ${item.price * item.qty}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total: ${order.total}</span>
                <span className={`px-3 py-1 rounded ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {order.status || 'pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
