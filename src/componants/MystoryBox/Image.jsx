import React from "react";
import './Mystorybox.css';


import BannerImage from   './Gift.png';
import ICON from          '../../asset/Logo.png';


function Gifts() {
  return (
    <div className="gift-container">
      <div className="gift-banner">
        <div className="gift-banner-image" > <div className="tap-overlay" ><small className="overlay-content">tap see it</small></div><img src={BannerImage} alt="Banner"  /></div>
        <h2 className="title">Find the mystory Gift for You</h2>
        <p className="content">Find your mystery box by following the location below. Tap the location button to view the location, and click the image button above to see the gift</p>
        <div className="gift-icon">
          <img className="icon" src={ICON } alt="Gift Icon" />
          <button className="btn btn-primary">Location</button>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
