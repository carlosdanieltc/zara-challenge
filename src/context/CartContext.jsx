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
    const newPhone = { ...phone, id: phone.id || crypto.randomUUID() }
    setCartItems((prevItems) => [...prevItems, newPhone]);
  };

  const removePhoneFromCart = (phoneId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== phoneId));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{ cartItems, addPhoneToCart, getTotal, getItemCount, removePhoneFromCart }}>
      {children}
    </CartContext.Provider>
  );
};