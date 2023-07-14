import React from "react";
import amazon from '../../Asserts/Amazon.svg'
import Hp from '../../Asserts/HP@2x.png'
import Nokia from '../../Asserts/Nokia@2x.png'
import Bosch from '../../Asserts/Bosch@2x.png'
import Philips from '../../Asserts/Philips@2x.png'


import "./Brands.css"



const Brands = () => {

    return(
        <div className="companiesContainer">
            <div className="container">
                <h1>
                Fortune 500 companies love Vmaker!
                </h1>
                <div className="flex">
                    <div className="logos">
                        <img src={amazon} alt="Google"></img>
                    </div>
                     <div className="logos">
                        <img src={Bosch} alt="Bosch"></img>
                    </div>
                    <div className="logos">
                        <img src={Hp} alt="Hp"></img>
                    </div>
                    <div className="logos">
                        <img src={Nokia} alt="Nokia"></img>
                    </div>
                    <div className="logos">
                        <img src={Philips} alt="Philips"></img>
                    </div>
                </div>
            </div>

        </div>
    )

}


export default Brands;