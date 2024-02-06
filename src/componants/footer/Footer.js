import React from 'react'
import './footer.css'
import{AiOutlineMail} from 'react-icons/ai'
import{ImWhatsapp} from 'react-icons/im'
import{FiInstagram} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
         <div className="container footer-container">
            <div className="footer-1">
                <a href='index.html' ><h4>video walker </h4></a>
                <p>take a break and turn your your luck in to gift just do it 
               
                </p>
            </div>
            <div className="footer-2">
               <h4>permalinks</h4>
               <ul className='permalinks'>
            <li><a ><Link to = '/'>HOME</Link></a></li>
            <li><a><Link to='/about'>ABOUT</Link></a></li>
            <li><a><Link to='/'>Advertiser</Link></a></li>
            <li><a><Link to='/'>CONTACT</Link></a></li>
               </ul>
            </div>
        
            <div className="footer-4">
                <h4>CONTACT-US</h4>
                <div>
                    <p>6238117525</p>
                    <p>nivedchandran7@gmail.com</p>
                    <ul className='socials'>
                    <li><a href="mailto:nivedchandran7@gmail.com?subject=The%20Subject&body=Hi%20Nived,"><AiOutlineMail></AiOutlineMail></a></li>
                    <li> <a href="https://wa.me/6238117525?text=Hi%20Nived"><ImWhatsapp></ImWhatsapp></a></li>
                    <li><a href="https://www.instagram.com/super_nived/"><FiInstagram></FiInstagram></a></li>
                </ul>
                </div>
            </div>

            <div className="footer-3">
                <h4>PRIVACY</h4>
                <ul className='privacy'>
                    <li><a href="">privacy</a></li>
                    <li><a href="">Terms and conditions</a></li>
                    <li><a href="">Refund policy</a></li>
                </ul>
            </div>
        </div>   
   

    </footer>
  )
}

export default Footer












