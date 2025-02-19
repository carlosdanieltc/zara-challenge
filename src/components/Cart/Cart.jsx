import React from 'react';
import React, { useState } from 'react';
import styles from './Cart.module.css'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (phone) => {
        setCartItems((prevItems) => [...prevItems, phone]);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className={styles.cartContainer}>

        </div>
    );
};

export default Cart;