import React,{useContext,useEffect} from 'react';
import './Cards.css';
import starter from '../../Asserts/starter.svg'
import starterlogo from "../../Asserts/starterlogo.svg"
import team from "../../Asserts/team.svg"
import teamslogo from "../../Asserts/teamslogo.svg"
import enterprise from "../../Asserts/enterprise.svg"
import enterpriselogo from "../../Asserts/enterpriselogo.svg"
import { userContext } from '../Banner/Banner';
import { useState } from 'react';

const Cards = (props) => {

  const {isYearly,setIsYearly} = useContext(userContext);
  const [decrease,setdecrease] = useState(388)
  const [hide,setHide] = useState("visible");

  useEffect(()=>{
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 300;
        if (scrollPosition > threshold) {
            setHide("none");
            setdecrease(350)
    
        } else if(scrollPosition<threshold){
          setHide("")
          setdecrease(388)
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
},[])
  return (
    props.type == "starter" ?
    <div className="card" style={{height:decrease}}>
    <h2 className="card-heading"><span className="symbol"><img src={starter} alt={"starter"}/></span>Starter</h2>
      <img src={starterlogo} alt="Logo" className="card-logo"/>
      {
        isYearly==false?
        <>
        <div className="card-price">19<span className='formonth'>/Mo</span></div>
        <p className="card-description">billed monthly.</p>
        </>:
         <>
         <div className="card-price">7<span className='formonth'></span></div>
         <p className="card-description">$84 billed yearly.</p>
         </>
        
      }
            <p className={"card-detailed-description"} style={{display:hide}}>For YouTubers, Gamers, Educators, Professionals or anyone under the sun.</p>
              <button className="card-button">Try Now</button>
        </div>
     :
     props.type == "team" ?
     <div className="teamcard" style={{height:decrease}}>
     <h2 className="teamcard-heading"><span className="symbol"><img src={team} alt={"Team"}/></span>Team</h2>
       <img src={teamslogo} alt="Logo" className="teamcard-logo"/> 
       {
        isYearly==false?
        <>
           <div className="teamcard-price">24<span className='formonth'>/Mo</span></div>
           <p className="teamcard-description">billed monthly.</p>
        </>:
         <>
           <div className="teamcard-price">8<span className='formonth'>/Mo</span></div>
           <p className="teamcard-description">$96 billed yearly.</p>
         </>
        
      }
             <p className="teamcard-detailed-description" style={{display:hide}}>For L&D, Sales, Engineering, Marketing, Support, and other teams.</p>
               <button className="teamcard-button">Try Now</button>
      </div>
     :
     <div className="enterprisecard" style={{height:decrease+2}}>
    <h2 className="enterprisecard-heading"><span className="symbol"><img src={enterprise} alt={"enterprise"}/></span>Enterprise</h2>
      <img src={enterpriselogo} alt="Logo" className="enterprisecard-logo"/>
        <div className="enterprisecard-price">Let’s Talk</div>
            <p className="enterprisecard-detailed-description" style={{display:hide}}>Got a huge team? We bring you premium features like custom Cname, Analytics etc with a dedicated Account Manager, 24*7 support and more.</p>
              <button className="enterprisecard-button">Try Now</button>
     </div>
  );
};

export default Cards;
