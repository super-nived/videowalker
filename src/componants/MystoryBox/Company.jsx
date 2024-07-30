import React from "react";
import './Mystorybox.css'
import BannerImage from '../../asset/python.png'



const Company = () => {
    return (
      <div className="company-container">
        <div className="company-overview-container">
          <h3 className="title">SPONSOR</h3>
          <p className="content">GiftSpot is the ultimate destination for sponsored gifts, connecting companies with gift enthusiasts worldwide.</p>
          <img src={BannerImage} alt="Company Overview" className="company-image" />
        </div>
        <div className="insights-container">
          <h4>GiftSpot Insights</h4>
          <p className="">2020</p>
        </div>
      </div>
    );
  };
  
  export default Company;
  