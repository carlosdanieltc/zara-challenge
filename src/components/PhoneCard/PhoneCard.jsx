import React from 'react';
import styles from './PhoneCard.module.css'

const PhoneCard = ({ phone }) => {
  return (
    <div className={styles.phoneCard}>
      <div className={styles.imgContainer}>
        <img src={phone.imageUrl} alt={phone.name} className={styles.phoneImage} />
      </div>
      <div className={styles.phoneInfo}>
        <div className={styles.phoneNameBrandContainer}>         
          <h3 className={styles.phoneBrand}>{phone.brand}</h3>
          <h4 className={styles.phoneName}>{phone.name}</h4>
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.price}>{`${phone.basePrice} EUR`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;