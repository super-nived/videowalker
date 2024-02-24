import React, { useEffect } from 'react'
import './Header.css'
import PIC from '../../asset/boy.png'
import { Link } from 'react-router-dom';
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

                        <span>G</span>
                        <span>E</span>
                        <span>T</span>
                        <span></span>
                        <br></br>
                        <span>A</span>
                        <span> </span>
                        <span>F</span>
                        <span>R</span>
                        <span>E</span>
                        <span>E</span>
                        <span> </span>
                        <span>G</span>
                        <span>I</span>
                        <span>F</span>
                        <span>T</span>
                      
               


                    </h1>
                    <p className='large-p'>
                    {/* Take a break! Find the secret code. Once you've cracked it, say that code to Video Walker to claim your surprise gift! */}
                    <h4>compleate the 3 task win the price</h4>
                    <span>1. Take a break! Find the secret code.</span>
                    <span>2. say that code to Video Walker (first)</span>
                    <span>3. Claim your surprise gift!.</span>
                    </p>
                    <p className='small-p' >
                   
                      <span>1. Take a break! Find the secret code.</span>
                      <span>2. say that code to Video Walker (first)</span>
                      <span>3. Claim your surprise gift!.</span>
                      <span></span>
                    </p>
                    <a href='#' className='btn btn-primary'><Link to='/tresuredetails'>SECREAT CODE</Link></a>
                </div>
                <div className="header-right">
                    <div className="header-image">
                        <img src={headerImage} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header