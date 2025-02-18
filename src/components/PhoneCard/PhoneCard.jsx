import React from 'react';
import './PhoneCard.css'

const PhoneCard = ({ phone }) => {
  return (
    <div className="phone-card">
      <div className="img-container">
        <img src={phone.imageUrl} alt={phone.name} className="phone-image" />
      </div>
      <div className="phone-info">
        <div className="phone-name-brand-container">         
          <h3 className="phone-brand">{phone.brand}</h3>
          <h4 className="phone-name">{phone.name}</h4>
        </div>
        <div className="price-container">
          <p className="price">{`$${phone.basePrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;