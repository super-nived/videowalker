import React from "react";
import './Mystorybox.css'
import BannerImage from '../../asset/python.png'



const Company = () => {
    return (
      <div className="company-container">
        <div className="company-overview-container">
          <h3 className="title">SPONSOR</h3>
          <p className="content">We are celebrating 5 successful years at our Kerala Kakkanad branch! Join us and enjoy special offers. Eat and celebrate with us!</p>
          <img src={"https://b.zmtcdn.com/data/pictures/chains/4/95314/a6f9d24581cae5f83a6ea282ca018f62.jpg"} alt="Company Overview" className="company-image" />
        </div>
        <div className="insights-container">
          <h4  >TAP TO SEE OUR OFFERS</h4>
          <p className="">by kfc kakkanad</p>
        </div>
      </div>
    );
  };
  
  export default Company;
  