
import React, { useEffect, useState } from 'react';
import styles from './PhoneCardCart.module.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

export const CardCart = ({ phone }) => {

    return (
        <div className={styles.card}>
            <div className={styles.phoneImageContainer}>
                {console.log(phone)}
                <img src={phone.colorImage} alt={phone.name} className={styles.phoneImage} />
            </div>
            <div className={styles.phoneDetail}>
                <div className={styles.phoneDetailContainer}>
                    <p>{phone.name}</p>
                    <p>{phone.storage} | {phone.colorName}</p>
                    <p>{phone.price} EUR</p>
                </div>
                <button className={styles.deleteButton}>Eliminar</button>
            </div>
        </div>
    );
};

export default CardCart;