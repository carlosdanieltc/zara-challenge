import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext'
import './NavBar.css';

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();
  const { getItemCount } = useCart();

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener carrito desde localStorage
  //   setCartCount(cart.length); 
  // }, []); 

  // const updateCartCount = (newCart) => {
  //   localStorage.setItem('cart', JSON.stringify(newCart)); // Guardar el carrito en localStorage
  //   setCartCount(newCart.length); 
  // };

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