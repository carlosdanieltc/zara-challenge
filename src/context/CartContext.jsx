import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

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