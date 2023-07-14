import React from 'react';
import './Cards.css';
import mainlogo from "../../Asserts/mainlogo.svg"
import starter from '../../Asserts/starter.svg'
import starterlogo from "../../Asserts/starterlogo.svg"
import team from "../../Asserts/team.svg"
import teamslogo from "../../Asserts/teamslogo.svg"
import enterprise from "../../Asserts/enterprise.svg"
import enterpriselogo from "../../Asserts/enterpriselogo.svg"

const Cards = (props) => {
  return (
    props.type == "starter" ?
    <div className="card">
    <h2 className="card-heading"><span className="symbol"><img src={starter} alt={"starter"}/></span>Starter</h2>
      <img src={starterlogo} alt="Logo" className="card-logo"/>
        <div className="card-price">19.99<span className='formonth'>/Mo</span></div>
          <p className="card-description">$84 billed yearly.</p>
            <p className="card-detailed-description">For YouTubers, Gamers, Educators, Professionals or anyone under the sun.</p>
              <button className="card-button">Try Now</button>
     </div>
     :
     props.type == "team" ?
     <div className="teamcard">
     <h2 className="teamcard-heading"><span className="symbol"><img src={team} alt={"Team"}/></span>Team</h2>
       <img src={teamslogo} alt="Logo" className="teamcard-logo"/>
         <div className="teamcard-price">8<span className='formonth'>/Mo</span></div>
           <p className="teamcard-description">$96 billed yearly.</p>
             <p className="teamcard-detailed-description">For L&D, Sales, Engineering, Marketing, Support, and other teams.</p>
               <button className="teamcard-button">Try Now</button>
      </div>
     :
     <div className="enterprisecard">
    <h2 className="enterprisecard-heading"><span className="symbol"><img src={enterprise} alt={"enterprise"}/></span>Enterprise</h2>
      <img src={enterpriselogo} alt="Logo" className="enterprisecard-logo"/>
        <div className="enterprisecard-price">Let’s Talk</div>
            <p className="enterprisecard-detailed-description">Got a huge team? We bring you premium features like custom Cname, Analytics etc with a dedicated Account Manager, 24*7 support and more.</p>
              <button className="enterprisecard-button">Try Now</button>
     </div>
  );
};

export default Cards;

//team - #f3fbff

//enter - #f1e5ff