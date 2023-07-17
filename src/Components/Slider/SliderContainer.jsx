import React, { useState } from "react";
import "./SliderContainer.css";
import Cards from "../Cards/Cards";
import lefticon from "../../Asserts/lefticon.gif"
import righticon from "../../Asserts/righticon.gif"
import { useEffect } from "react";
import enterprisecheck from "../../Asserts/enterprisecheck.svg" 
import startercheck from "../../Asserts/startercheck.svg" 
import teamcheck from "../../Asserts/teamcheck.svg" 


const CardSlider = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [icon,seticon] = useState('')
  const [nextbtn,setnextbtn] = useState(false)
  const [prevbtn,setprevbtn] = useState(false)
  const [type,setType] = useState({type:"starter",icon:"startercheck"})
  let tableData = {
    "CustomBranding": {
      "starter": {
        "Add custom CTA": false,
        "Add custom Cname": false,
        "Branded frame for webcam recording": false,
        "Custom Logo and Color on the video player page": false,
        "Customize video player": false,
        "Add custom subdomain": false,
        "Remove Vmaker branding": true
      },
      "team": {
        "Add custom CTA": false,
        "Add custom Cname": false,
        "Branded frame for webcam recording": false,
        "Custom Logo and Color on the video player page": true,
        "Customize video player": true,
        "Add custom subdomain": true,
        "Remove Vmaker branding": true
      },
      "enterprise": {
        "Add custom CTA": true,
        "Add custom Cname": true,
        "Branded frame for webcam recording": true,
        "Custom Logo and Color on the video player page": true,
        "Customize video player": true,
        "Add custom subdomain": true,
        "Remove Vmaker branding": true
      }
    },
    "Vmaker Exclusive": {
      "starter": {
        "Record Scheduler": false,
        "Seld Destruction Video": false
      },
      "team": {
        "Record Scheduler": true,
        "Seld Destruction Video": true
      },
      "enterprise": {
        "Record Scheduler": true,
        "Seld Destruction Video": true
      }
    },
    "Support": {
      "starter": {
        "Account Manger": false,
        "Dedicated Support": false,
        "Expert training": false,
        "Free App Webinar": true,
        "Priority Supoort": true
      },
      "team": {
        "Account Manger": false,
        "Dedicated Support": false,
        "Expert training": false,
        "Free App Webinar": true,
        "Priority Supoort": true
      },
      "enterprise": {
        "Account Manger": true,
        "Dedicated Support": true,
        "Expert training": true,
        "Free App Webinar": true,
        "Priority Supoort": true
      },
      "Prime Features": {
        "Recoring Duration": "Unlimited",
        "Video Qualtiy": "High definition,up to 4k.",
        "No of Video Recording": "All Videos",
        "No of videos accessible": "Unlimited",
        "Cloud storage": "Unlimited",
        "Watermark on Videos": "No Watermark"
      }
    }
  }

  console.log(nextbtn,prevbtn)
  const starter = <img src={startercheck} alt="starter"/>
  const team = <img src={teamcheck} alt="teamcheck"/>
  const enterprise = <img src={enterprisecheck} alt="enterprise"/>

  useEffect(()=>{

    if(activeCard==1){

      setType({type:"starter",icon:"startercheck"})
      seticon(starter)
      setprevbtn(false)
      setnextbtn(false)

    } else if(activeCard==2){
      setType({type:"team",icon:"teamcheck"})
      seticon(team)
    }else if(activeCard==3){
      setType({type:"enterprise",icon:"enterprisecheck"})
      seticon(enterprise)
      // setnextbtn(true)
      setprevbtn(false)
    }
  },[activeCard])

  const cards = [
    {
      id: 1,
      frontContent: <Cards type="starter" />,
    },
    {
      id: 2,
      frontContent: <Cards type="team" />,
    },
    {
      id: 3,
      frontContent: <Cards type="enterprise" />,
    },
    
  ];

  const handlePrev = () => {
    setActiveCard((prevCard) => (prevCard === 1 ? cards.length : prevCard - 1));
  };

  const handleNext = () => {
    setActiveCard((prevCard) => (prevCard === cards.length ? 1 : prevCard + 1));
  };

  const handleCardClick = (cardId) => {
    if (activeCard === cardId) {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    } else {
      setActiveCard(cardId);
      setIsFlipped(false);
    }
  };

  const getTableDataForCardType = (type) => {
    if (type === "starter") {
      return tableData["CustomBranding"]["starter"];
    } else if (type === "team") {
      return tableData["Vmaker Exclusive"]["team"];
    } else if (type === "enterprise") {
      return tableData["Vmaker Exclusive"]["enterprise"];
    } else {
      return null; // Handle the custom type if needed
    }
  };

  const activeCardType = cards[activeCard - 1].type;
  const activeTableData = getTableDataForCardType(activeCardType);
 
  

  return (
    <>
        <div className="card-slider">
        <button className="prev-button" onClick={handlePrev} disabled={prevbtn}>
          <img src={lefticon} alt="left" />
        </button>
        <div className="slider-card-container">
          {cards.map((card) => (
            card.id === activeCard && (
              <div
                className={`slider-card ${isFlipped ? "flipped" : ""}`}
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className={"front"}>{card.frontContent}</div>
                </div>
              </div>
            )
          ))}
        </div>
        <button className="next-button" onClick={handleNext} disabled={nextbtn}>
          <img src={righticon} alt="right" />
        </button>
      </div>

      <div className="slidertable-container">
        <table className="slidertable">
          <tbody>
            <tr className="sliderheader-row">
              <th className="slidertableheader" colSpan={2}>Custom Branding</th>
            </tr>
            {Object.entries(tableData["CustomBranding"][`${type.type}`]).map(([feature, value]) => (
              <tr className="data" key={feature}>
                <td className="slidertable-cell">{feature}</td>
                <td className="slidertable-cell">{value ? icon : "N/A"}</td>
              </tr>
            ))}
            <tr className="sliderheader-row">
              <th className="slidertableheader" colSpan={2}>Vmaker</th>
            </tr>
            {Object.entries(tableData["Vmaker Exclusive"][`${type.type}`]).map(([feature, value]) => (
              <tr className="data" key={feature}>
                <td className="slidertable-cell">{feature}</td>
                <td className="slidertable-cell">{value ? "Yes" : "N/A"}</td>
              </tr>
            ))}
             <tr className="sliderheader-row">
              <th className="slidertableheader" colSpan={2}>Support</th>
            </tr>
            {Object.entries(tableData["Support"][`${type.type}`]).map(([feature, value]) => (
              <tr className="data" key={feature}>
                <td className="slidertable-cell">{feature}</td>
                <td className="slidertable-cell">{value ? "Yes" : "N/A"}</td>
              </tr>
            ))}
              <tr className="sliderheader-row">
              <th className="slidertableheader" colSpan={2}>Prime Features</th>
            </tr>
            <div className="primefeatures">
            <tr className="data">
              <td className="slidertable-cell">Recoring Duration</td>
              <td className="slidertable-cell">Unlimited</td></tr>
              <tr className="data">
              <td className="slidertable-cell">Video Qualty</td>
              <td className="slidertable-cell">High definition,up to 4k.</td></tr>
              <tr className="data">
              <td className="slidertable-cell">No of Video Recording</td>
              <td className="slidertable-cell">All Videos</td></tr>
              <tr className="data">
              <td className="slidertable-cell">No of videos accessible</td>
              <td className="slidertable-cell">Unlimited</td></tr>
              <tr className="data">
              <td className="slidertable-cell">Cloud storage</td>
              <td className="slidertable-cell">Unlimited</td>
            </tr></div>
          </tbody>
        </table>
      </div> 
      
      
</>
  );
};

export default CardSlider;
