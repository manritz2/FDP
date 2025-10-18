import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user?.isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded p-6 shadow hover:shadow-lg cursor-pointer">
          <h2 className="text-xl font-bold mb-2">Manage Products</h2>
          <p className="text-gray-600">Add, edit, or remove menu items</p>
        </div>
        <div className="border rounded p-6 shadow hover:shadow-lg cursor-pointer">
          <h2 className="text-xl font-bold mb-2">View Orders</h2>
          <p className="text-gray-600">See all customer orders</p>
        </div>
        <div className="border rounded p-6 shadow hover:shadow-lg cursor-pointer">
          <h2 className="text-xl font-bold mb-2">Users</h2>
          <p className="text-gray-600">Manage user accounts</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
