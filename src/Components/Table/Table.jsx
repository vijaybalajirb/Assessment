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
        <div className="table-cell center"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
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
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Vmaker Exclusive</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Record Scheduler</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck}alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Self Destruction Video</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Support</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Account Manager</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Dedicated Support</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Expert training</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Free App Webinar</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Priority Support</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Advanced Security</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Single sign-on</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Privacy and Security</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">2 Factor Authentication</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">SSL Encryption</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Video Player & Analytics</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Advanced Analytics</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Direct Youtube Upload</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Option to Embed</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Video Streaming</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Viewer Insights</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Social sharing</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Collaboration</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Create Folder</div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Team Collaboration</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Video Management System</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>





    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Recorder</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Computer audio</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Advanced Frames and Filters</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Screen Annotate & Mouse Emphasis</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Custom Recording Dimensions</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Virtual Background (for screen + webcam mode)</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Microphone audio</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Noise cancellation</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Recorder</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Video Editor</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Full Editing Suite</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Basic editing suite</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Advanced editing suite</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
      <div className="table-row">
        <div className="table-cell">Upload External Video</div>
        <div className="table-cell"><img src={startercheck} alt="startercheck"/></div>
        <div className="table-cell"><img src={teamcheck} alt="teamcheck"/></div>
        <div className="table-cell"><img src={enterprisecheck} alt="enterprisecheck"/></div>
      </div>
    </div>
    <div className="table-container">
      <div className="table-row header-row">
        <div className="table-cell">Prime Features</div>
        <div className="table-cell">Starter</div>
        <div className="table-cell">Team</div>
        <div className="table-cell">Enterprise</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Recording Duration</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Video Quality</div>
        <div className="table-cell">High definition, up to 4k.</div>
        <div className="table-cell">High definition, up to 4k.</div>
        <div className="table-cell">High definition, up to 4k.</div>
      </div>
      <div className="table-row">
        <div className="table-cell">No of Video Recording</div>
        <div className="table-cell">All Videos</div>
        <div className="table-cell">All Videos</div>
        <div className="table-cell">All Videos</div>
      </div>
      <div className="table-row">
        <div className="table-cell">No. of videos accessible</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Cloud storage</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
      </div>
      <div className="table-row">
        <div className="table-cell">No of video Downloads</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
        <div className="table-cell">Unlimited</div>
      </div>
      <div className="table-row">
        <div className="table-cell">Watermark on Videos</div>
        <div className="table-cell">No Watermark</div>
        <div className="table-cell">No Watermark</div>
        <div className="table-cell">No Watermark</div>
      </div>





    </div>




    </div>
    
    
    </>
    
  );
};

export default DataTable;
