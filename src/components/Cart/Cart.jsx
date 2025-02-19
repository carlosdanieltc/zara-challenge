
import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import PhoneCardCart from '../PhoneCard/PhoneCardCart'

export const Cart = () => {
    const { cartItems, getItemCount, getTotal } = useCart();

    useEffect(() => {
        getItemCount();
    }, [getItemCount]);

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartItemsContainer}>
                <h2 className={styles.cartItems}>CART ({getItemCount()})</h2>
                <div className={styles.phoneCards}>
                    {cartItems.map((phone, index) => (
                        <PhoneCardCart></PhoneCardCart>
                    ))}
                </div>
            </div>
            <div className={styles.cartOptions}>
                <Link to="/">
                    <div className={styles.backButtonContainer}>
                        <button className={styles.backButton}>CONTINUE SHOPPING</button>
                    </div>
                </Link>

                <div className={styles.payContainer}>
                    <p>
                        <span style={{ marginRight: '20px' }}>TOTAL</span> {getTotal()} EUR
                    </p>
                    <button className={styles.buttonPay}>PAY</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;