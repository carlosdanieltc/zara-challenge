import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({ setSearchQuery }) => {
  const [cartCount, setCartCount] = useState(0);

  // Cargar cantidad de productos del carrito desde localStorage al iniciar
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtener carrito desde localStorage
    setCartCount(cart.length); // Establecer la cantidad de productos en el carrito
  }, []); // Solo se ejecuta una vez al montar el componente

  // Función para actualizar el carrito
  const updateCartCount = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart)); // Guardar el carrito en localStorage
    setCartCount(newCart.length); // Actualizar el estado de cartCount
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img className='logo' src="../../src/assets/logo.png" alt="logo" />
      </Link>

      <Link to="/cart" className='shopping-cart-container'>
        <img className='shopping-cart' src="../../src/assets/shopping-cart-icon.webp" alt="" />
        {/* Mostrar el número de productos en el carrito */}
        <span className="cart-count">{cartCount > 0 ? cartCount : 0}</span>
      </Link>
    </nav>
  );
};

export default NavBar;