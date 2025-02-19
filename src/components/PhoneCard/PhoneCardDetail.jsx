import React from 'react';
import styles from './PhoneCardDetail.module.css'
import { useState } from 'react';

const PhoneCardDetail = ({ phoneDetail }) => {

  const storageOptions = phoneDetail.storageOptions;
  const colorOptions = phoneDetail.colorOptions
  const name = phoneDetail.name
  const basePrice = phoneDetail.basePrice

  const [selectedColor, setSelectedColor] = useState(colorOptions[0].imageUrl);
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0].capacity);
  const [selectedPrice, setSelectedPrice] = useState(storageOptions[0].price);

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  const handleStorageChange = (storage, price) => {
    setSelectedStorage(storage);
    setSelectedPrice(price)
  };

  return (
    <div className={styles.phoneCardDetail}>
      <div className={styles.phoneImgContainer}>
        <img className={styles.image} src={selectedColor} alt="" />
      </div>
      <div className={styles.phoneInfo}>
        <h1>{name}</h1>
        <p>From {selectedPrice} EUR</p>
        <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>

        <div className={styles.storageContainer}>
          {storageOptions.map((item, index) => (
            <label key={item.capacity} className={styles.storageOption}>
              <input
                type="radio"
                name="storage" 
                value={item.capacity}
                checked={selectedStorage === item.capacity}
                onChange={() => handleStorageChange(item.capacity, item.price)}
              />
              {item.capacity}
            </label>
          ))}
        </div>

        <p>COLOR. PICK YOUR FAVORITE</p>
        <div className={styles.colorOptionsContainer}>
          {colorOptions.map((item, index) => (
            <label key={item.name} className={styles.colorOption} style={{ backgroundColor: item.hexCode }}>
              <input 
                type="radio"
                name="color"
                value={item.name}
                checked= {selectedColor === item.imageUrl}
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

