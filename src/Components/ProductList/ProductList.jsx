

import React from 'react';
import './ProductList.css';

const ProductList = () => {

    let dataObj = [
    {
        header:"Solutions",
        products:["Product Videos","Tutorial Videos","Explainer Videos"
                ,"Training Videos","How-to Videos","Video Resume",
                "Video Emails","Youtube Screen Recorder","Presentation Video",'Facebook Videos' ]
    },
    {
         header:"Products",
         products:["Screen Recorder","Webcam Recorder","Video Maker",
         "Video Editor","Online Meeting Recorder","Video Messenger","Screencast tool","Chrome Extension","Vmaker Enterprise"]
    },
    {
         header:"Compare with",
         products:["Snagit","Loom","Camtasia","Cloudapp",
         "Screencast-O-Matic","Screencastify","Movavi"]
    },
    {
        header:"Company",
        products:["Our Story","Blog","Customer Testimonials","Terms",
        "Feedback","Roadmap"]
    },
    {
        header:"Resources",
        products:["Free Mic Test","Free Webcam Test","Educators Resources","YouTubers Resources",
        "Remote Working Resources","Video Resume Maker"]
    },
    {
        header:"Support",
        products:["Tutorial","Training","FAQ","How to",
        "Getting Started"]
    }


]
  return (
    <div className="grid">     
      {
      
      dataObj.map((item, index) => (
        <div className="item">
        <div key={index}>
          <ul>
          <li className='list foot-header'><h6>{item.header}</h6></li>
            {item.products.map((product, productIndex) => (

              <li className='list' key={productIndex}>
                <a class="footerLinkAdder" href="https://www.vmaker.com/video-resume-maker">{product}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      ))
      
      }
      <div className='item'>
      <div className='address footer-div'>
      <h6>Vmaker</h6>
        <p><strong>From the makers of <br/><span>Animaker</span></strong></p>
        <p className='smalltxt'>The world’s best DIY video creation tool</p>
        <p className='copytxt'>3260 Hillview Avenue, <br/>Palo Alto, CA 94304, USA<br/>San Francisco, CA 94111.<br/> <a style={{color:'white'}} href="mailto:jerry@animaker.com">hola@vmaker.com</a></p>
      </div>
      
      </div>
    </div>
  );
};

export default ProductList;
