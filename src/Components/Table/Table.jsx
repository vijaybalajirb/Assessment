import React from 'react';
import './Table.css';
import enterprisecheck from "../../Asserts/enterprisecheck.svg" 
import startercheck from "../../Asserts/startercheck.svg" 
import teamcheck from "../../Asserts/teamcheck.svg" 

const DataTable = () => {
  return (
    <>
    <div className='wrapper'>
      <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Custom Branding</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Add custom CTA</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Add custom Cname</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Branded frame for webcam recording</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Custom Logo and Color on the video player page</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Customize video player</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Add custom subdomain</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Remove Vmaker branding</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    </div>
    
    </>
    
  );
};

export default DataTable;
