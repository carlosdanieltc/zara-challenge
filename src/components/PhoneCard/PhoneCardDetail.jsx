import React from 'react';
import styles from './PhoneCardDetail.module.css'

const PhoneCardDetail = ({ phoneDetail }) => {
 
  return (
    <div className={styles.phoneCardDetail}>
      <div className={styles.phoneImgContainer}>
        { <img src={phoneDetail.colorOptions[0].imageUrl} alt="" /> }
      </div>
      <div className={styles.phoneInfo}>
        
      </div>
    </div>
  );
};

export default PhoneCardDetail;

