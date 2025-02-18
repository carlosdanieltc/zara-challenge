import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({ setSearchQuery }) => {  // Recibe setSearchQuery
  const [cartCount, setCartCount] = useState(0);

  // Cargar cantidad de productos del carrito desde localStorage al iniciar
  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //   setCartCount(cart.length);
  // }, []);

  return (
    <nav className="navbar">
        <Link to="/" className="logo-container">
          <img className='logo' src="../../src/assets/logo.png" alt="logo" />
        </Link>

        <Link to="/cart" className='shopping-cart-container'>
          <img className='shopping-cart' src="../../src/assets/shopping-cart-icon.webp" alt="" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      {/* <SearchBar setSearchQuery={setSearchQuery}></SearchBar> */}
    </nav>
  );
};

export default NavBar;