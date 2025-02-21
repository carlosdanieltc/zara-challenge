import React from 'react';
import './PhoneSpecifications.css';

const PhoneSpecifications = ({ phoneDetail }) => {
  const specifications = [
    { title: 'BRAND', value: phoneDetail.brand },
    { title: 'NAME', value: phoneDetail.name },
    { title: 'DESCRIPTION', value: phoneDetail.description },
    { title: 'SCREEN', value: phoneDetail.specs.screen },
    { title: 'RESOLUTION', value: phoneDetail.specs.resolution },
    { title: 'PROCESSOR', value: phoneDetail.specs.processor },
    { title: 'MAIN CAMERA', value: phoneDetail.specs.mainCamera },
    { title: 'SELFIE CAMERA', value: phoneDetail.specs.selfieCamera },
    { title: 'BATTERY', value: phoneDetail.specs.battery },
    { title: 'OS', value: phoneDetail.specs.os },
    { title: 'SCREEN REFRESH RATE', value: phoneDetail.specs.screenRefreshRate },
  ];

  return (
    <div className="phone-specifications-container">
      <h2 className="specifications-title">SPECIFICATIONS</h2>
      {specifications.map(({ title, value }) => (
        <div className="specification" key={title}>
          <h3 className="data-title">{title}</h3>
          <p className="data">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default PhoneSpecifications;