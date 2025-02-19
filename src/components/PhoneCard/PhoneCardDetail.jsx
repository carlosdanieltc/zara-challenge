import React from 'react';
import styles from './PhoneCardDetail.module.css'
import { useState } from 'react';

const PhoneCardDetail = ({ phoneDetail }) => {

  const storageOptions = phoneDetail.storageOptions;
  const colorOptions = phoneDetail.colorOptions
  const name = phoneDetail.name
  const basePrice = phoneDetail.basePrice

  const [selectedColor, setSelectedColor] = useState(colorOptions[1].imageUrl);

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <div className={styles.phoneCardDetail}>
      <div className={styles.phoneImgContainer}>
        <img className={styles.image} src={selectedColor} alt="" />
      </div>
      <div className={styles.phoneInfo}>
        <h1>{name}</h1>
        <p>From {basePrice} EUR</p>
        <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>

        <div className={styles.storageContainer}>
          {storageOptions.map((item, index) => (
            <button key={index} className={styles.storageButton}>{item.capacity}</button>
          ))}
        </div>

        <p>COLOR. PICK YOUR FAVORITE</p>
        <div className={styles.colorOptions}>
          {colorOptions.map((item, index) => (
            <label key={item.name} className={styles.colorOption}>
              <input 
                type="radio"
                name="color"
                value={item.name}
                onChange={() => handleColorChange(item.imageUrl)} 
              />
            </label>
          ))}
        </div>
        <button className={styles.buttonAddToCart}>
          AÑADIR
        </button>
      </div>
    </div>
  );
};

export default PhoneCardDetail;

