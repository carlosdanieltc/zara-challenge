import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext'
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const { getItemCount } = useCart();

  return (
    <nav className={`navbar ${location.pathname === '/cart' ? 'navbar-cart' : ''}`}>
      <Link to="/" className="logo-container">
        <img className='logo' src="../../src/assets/logo.png" alt="logo" />
      </Link>

      {location.pathname !== '/cart' && (
        <Link to="/cart" className='shopping-cart-container'>
          <img className='shopping-cart' src="../../src/assets/shopping-cart-icon.webp" alt="Carrito" />
          <span className="cart-count">{getItemCount()}</span>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
