import React from "react";
import './Mystorybox.css'
import Navbar from "./Navbar";
import Company from "./Company";
import Gifts from "./Image";



function Mystorybox () {
    return (
  
    <div className="Mystorybox-main-container">
      <div className="Mystorybox-inner-container">
      <Navbar></Navbar>
      <div className="Mystorybox-content-container">
        <Gifts></Gifts>
        <Company></Company>
       </div>
      </div> 
     </div>
  
    )
  }
  
  export default Mystorybox