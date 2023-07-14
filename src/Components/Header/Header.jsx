
import React, { useState } from 'react';
import mainlogo from '../../Asserts/mainlogo.svg'
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='maincontainer'>
      <div className="logo">
        <img src={mainlogo} alt="Logo" />
      </div>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <a href="#">How to</a>
        <a href="#">Product</a>
        <a href="#">Solution</a>
        <a href="#">Feature</a>
        <a href="#">Pricing</a>
        <a href="#">Login</a>
        <button className='headerButton'>Sign Up</button>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
