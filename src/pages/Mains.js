import React from 'react'
import './Mains.css'
import Nav from '../componants/navbar/Nav';
import Footer from '../componants/footer/Footer';
import Header from '../componants/header/Header';
import About from '../componants/About/About';


function Mains () {
  return (

    <div> 
    <Nav></Nav>
    <Header></Header>
   <div className='mobileHide' style={{marginTop:'8rem'}}> <Footer ></Footer> </div>
   </div>

  )
}

export default Mains