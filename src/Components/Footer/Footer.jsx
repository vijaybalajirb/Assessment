import React from 'react';
import mainlogo from '../../Asserts/mainlogolarge.svg'
import './Footer.css'


const Footer = () => { 
    return(
        <div className='flexbox'>
            <div className='logo'>
                <a href='/'>
                    <img className='mainlogo' src={mainlogo}></img>
                </a>
            </div>
            <div className='slogan'>
                <p>
                Video Recording ,<span>Done Right!</span> 
                </p>
            </div>
            <div className='copyright'>
                <p>
                Copyright © 2020 Animaker Inc, All rights reserved
                </p>
            </div>


        </div>
    )
}

export default Footer;