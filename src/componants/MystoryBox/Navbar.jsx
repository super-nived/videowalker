import React from 'react';
import PIC from '../../asset/boy.png';
import './Mystorybox.css';

function Navbar() {
  return (
    <div className="mystory-navbar-container">
      <div className="giftspot-header">
        <img src={PIC} alt="GiftSpot Logo" className="giftspot-logo" />
        <h1 className="giftspot-title">GiftSpot</h1>
      </div>
    </div>
  );
}

export default Navbar;
