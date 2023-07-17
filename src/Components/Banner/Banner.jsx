
import React, { useState,createContext } from 'react';
import GroupedCards from '../GroupedCards/GroupedCards';
import CardSlider from '../Slider/SliderContainer';
import './Banner.css';

export const userContext = createContext(false)


const Banner = () => {

  const [isYearly, setIsYearly] = useState(false);

  
  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  return (
    <userContext.Provider value = {{isYearly, setIsYearly}}>
    <div className='bannerContainer'>
      <div className='containers'>
        <h1 className='bannerheader'>
          Pick A Plan You Need. Affordable & Efficient.
        </h1>
        <p className='subheader'>
          Choose A Plan Suitable For You or Play Around With Our Freemium.
        </p>
        <div className='herosection'>
        <div className='offer'>
          Save upto 64%
          </div>
        <div className='toggleareabanner'>
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
    </div>
    <GroupedCards/>
    <CardSlider/>

    </userContext.Provider>

  );
};

export default Banner
