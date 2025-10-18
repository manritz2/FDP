import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/userSlice';

const Navbar = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">FoodApp</Link>
        <div>
          <Link to="/menu" className="mr-4">Menu</Link>
          <Link to="/cart" className="mr-4">Cart ({useSelector(state => state.cart.items.length)})</Link>
          {user ? (
            <>
              <span className="mr-4">Hi, {user.name}</span>
              <Link to="/orders" className="mr-4">Orders</Link>
              {user.isAdmin && <Link to="/admin" className="mr-4">Admin</Link>}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
