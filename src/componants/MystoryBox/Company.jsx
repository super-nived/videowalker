import React from "react";
import './Mystorybox.css'
import BannerImage from '../../asset/python.png'



const Company = ({advertisers}) => {
    return (
      <div className="company-container">
        <div className="company-overview-container">
          <h3 className="title">SPONSOR</h3>
          <p className="content">{advertisers[0]?.content}</p>
          <img src={advertisers[0]?.company_image ? advertisers[0]?.company_image : "https://via.placeholder.com/150"} alt="Company Overview" className="company-image" />
        </div>
        <div className="insights-container">
          <h4  ><a href={advertisers[0]?.company_website}>TAP TO SEE OUR OFFERS</a></h4>
          <p className="">by {advertisers[0]?.company_name}</p>
        </div>
      </div>
    );
  };
  
  export default Company;
  