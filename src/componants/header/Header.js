import React, { useEffect } from 'react'
import './Header.css'
import PIC from '../../asset/Gift.png'
import { Link } from 'react-router-dom';
import Giftbox from '../GiftAnimation/Giftbox';
function Header() {
    useEffect(() => {
        // Check local storage for the image URL
        const storedImage = localStorage.getItem('Image');
    
        // If not present, set the default image URL and save to local storage
        if (!storedImage) {
          localStorage.setItem('Image', PIC);
        }
      }, []);
    
      // Get the image URL from local storage
      const headerImage = localStorage.getItem('Image') || PIC;
    return (
        <header>
            <div className="container header-container">
                <div className="header-left">
                    <h1 className='animate' >

                        <span>F</span>
                        <span>I</span>
                        <span>N</span>
                        <span>D</span>
                        <span></span>
                        <br></br>
                        <span>T</span>
                        <span>H</span>
                        <span>E</span>
                        <span> </span>
                        <span>T</span>
                        <span>R</span>
                        <span>E</span>
                        <span>A</span>
                        <span>S</span>
                        <span>U</span>
                        <span>R</span>
                        <span>E</span>
            
                      
               


                    </h1>
                    <p className='large-p'>
                    {/* Take a break! Find the secret code. Once you've cracked it, say that code to Video Walker to claim your surprise gift! */}
                    <h4>compleate the 3 task win the price</h4>
                    <span>Welcome! Discover your treasure today. Uncover hidden rewards and transform your luck into a gift. Click the button below to start your journey to the treasure box.</span>
          
                    </p>
                    <p className='small-p' >
                   
                      <span>Welcome! Discover your treasure today. Uncover hidden rewards and transform your luck into a gift. Click the button below to start your journey to the treasure box.</span>
 
                    </p>
                    <a href='#' className='btn btn-primary'><Link to='/tresuredetails'>PRESS ME !</Link></a>
                </div>
                <div className="header-right">
                    <div className="header-image">
                       <Giftbox></Giftbox>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header