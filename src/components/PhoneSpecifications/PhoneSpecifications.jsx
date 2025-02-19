import React from 'react';
import './PhoneSpecifications.css'

const PhoneSpecifications = ({ phoneDetail }) => {
  return (
    <div className="phone-specifications-container">
      <div className='specificatio-container'></div>
      <h2 className='specifications-title'>SPECIFICATIONS</h2>
      <div className='specification'>
        <h3 className='data-title'>BRAND</h3>
        <p className='data'>{phoneDetail.brand}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>NAME</h3>
        <p className='data'>{phoneDetail.name}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>DESCRIPTION</h3>
        <p className='data'>{phoneDetail.description}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>SCREEN</h3>
        <p className='data'>{phoneDetail.specs.screen}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>RESOLUTION</h3>
        <p className='data'>{phoneDetail.specs.resolution}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>PROCESSOR</h3>
        <p className='data'>{phoneDetail.specs.processor}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>MAIN CAMERA</h3>
        <p className='data'>{phoneDetail.specs.mainCamera}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>SELFIE CAMERA</h3>
        <p className='data'>{phoneDetail.specs.selfieCamera}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>BATTERY</h3>
        <p className='data'>{phoneDetail.specs.battery}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>OS</h3>
        <p className='data'>{phoneDetail.specs.os}</p>
      </div>
      <div className='specification'>
        <h3 className='data-title'>SCREEN REFRESH RATE</h3>
        <p className='data'>{phoneDetail.specs.screenRefreshRate}</p>
      </div>
    </div>
  );
};

export default PhoneSpecifications;