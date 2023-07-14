import React,{useEffect} from "react";
import "./GroupedCards.css";
import Cards from "../Cards/Cards";
import DataTable from "../Table/Table";
import { useState } from "react";

const GroupedCards = () => {

    const [position,setPosition] = useState(false)
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
      setIsYearly(!isYearly);
    };

    useEffect(()=>{
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 300;
      
            if (scrollPosition > threshold) {
                setPosition(true);
            } else {
                setPosition(false);
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
    },[])

  return (
    <div className="wrapperclass">
    <div className="card-container">
        {/* {
        position==true?
        <features className="features">
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
      </features>
      
      : */}
      <features className="features">
        Features
      </features>
      
      <Cards type="starter"/>
      <Cards type="team"/>
      <Cards type="enterprise"/>
    </div>
    <DataTable/>
    </div>
    
  );
};

export default GroupedCards;
