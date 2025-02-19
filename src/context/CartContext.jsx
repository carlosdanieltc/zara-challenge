import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

// Hook personalizado para acceder al carrito
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addPhoneToCart = (phone) => {
    setCartItems((prevItems) => [...prevItems, phone]);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{ cartItems, addPhoneToCart, getTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};