import React from 'react';
import styles from './PhoneCardDetail.module.css'
import { useCart } from '../../context/CartContext'
import { useState } from 'react';

const PhoneCardDetail = ({ phoneDetail }) => {

  const storageOptions = phoneDetail.storageOptions;
  const colorOptions = phoneDetail.colorOptions
  const name = phoneDetail.name
  const basePrice = phoneDetail.basePrice

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorName, setSelectedColorName] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(storageOptions[0].price);

  const { addPhoneToCart } = useCart();

  const handleColorChange = (newColor, newColorName) => {
    setSelectedColor(newColor);
    setSelectedColorName(newColorName)
  };

  const handleStorageChange = (storage, price) => {
    setSelectedStorage(storage);
    setSelectedPrice(price)
  };

  const handleAddToCart = () => {
    if (selectedColor && selectedStorage) {
      const selectedPhone = {
        name,
        price: selectedPrice,
        colorImage: selectedColor,
        colorName: selectedColorName,
        storage: selectedStorage,
      };
      addPhoneToCart(selectedPhone);
    }
  };

  return (
    <div className={styles.phoneCardDetail}>
      <div className={styles.phoneImgContainer}>
        <img className={styles.image} src={selectedColor ?? colorOptions[0].imageUrl} alt="" />
      </div>
      <div className={styles.phoneInfo}>
        <h1>{name}</h1>
        <p>From {selectedPrice} EUR</p>
        <p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>

        <div className={styles.storageContainer}>
          {storageOptions.map((item, index) => (
            <label key={item.capacity} className={styles.storageOption}>
              <input
                className={styles.inputPhone}
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
                className={styles.inputPhone}
                type="radio"
                name="color"
                value={item.name} //Nombre color del tlf
                checked= {selectedColor === item.imageUrl}
                onChange={() => handleColorChange(item.imageUrl, item.name)} 
              />             
            </label>
          ))}
        </div>
        <button 
          className={styles.buttonAddToCart} 
          disabled={!selectedColor || !selectedStorage}
          onClick={handleAddToCart}>
          AÑADIR
        </button>
      </div>
    </div>
  );
};

export default PhoneCardDetail;

