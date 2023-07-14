
import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className='bannerContainer'>
      <div className='containers'>
        <h1 className='bannerheader'>
          Pick A Plan You Need. Affordable & Efficient.
        </h1>
        <p className='subheader'>
          Choose A Plan Suitable For You or Play Around With Our Freemium.
        </p>
        <div className='offer'>Save upto 64%</div>
        <div className='togglearea'>
          <label className={`monthly ${isYearly ? '' : 'active'}`}>
            Monthly
            <input
              type='checkbox'
              id='tenure'
              name='tenure'
              checked={!isYearly}
              onChange={handleToggle}
            />
            <span className='togglebtn'></span>
          </label>
          <label className={`yearly ${isYearly ? 'active' : ''}`}>
            Yearly
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
