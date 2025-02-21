
import React, { useEffect, useState } from 'react';
import styles from './PhoneCardCart.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

export const CardCart = ({ phone }) => {

    const { removePhoneFromCart } = useCart();

    const handleRemove = () => {
        removePhoneFromCart(phone.id);
    };

    return (
        <div className={styles.card}>
            <div className={styles.phoneImageContainer}>
                <img src={phone.colorImage} alt={phone.name} className={styles.phoneImage} />
            </div>
            <div className={styles.phoneDetail}>
                <div className={styles.phoneDetailContainer}>
                    <p className={styles.phoneP}>{phone.name}</p>
                    <p className={styles.phoneP}>{phone.storage} | {phone.colorName}</p>
                    <p>{phone.price} EUR</p>
                </div>
                <button className={styles.deleteButton} onClick={handleRemove}>Eliminar</button>
            </div>
        </div>
    );
};

export default CardCart;