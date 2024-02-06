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

                        <span>T</span>
                        <span>H</span>
                        <span>E</span>
                        <span></span>
                        <br></br>
                        <span>V</span>
                        <span>I</span>
                        <span>D</span>
                        <span>E</span>
                        <span>O</span>
                        <span> </span>
                        <span>W</span>
                        <span>A</span>
                        <span>L</span>
                        <span>K</span>
                        <span>E</span>
                        <span>R</span>
               


                    </h1>
                    <p className='large-p'>
                    Take a break! Find the secret code. Once you've cracked it, say that code to Video Walker to claim your surprise gift!

                    </p>
                    <p className='small-p' >

                    Take a break! Find the secret code. Once you've cracked it, say that code to Video Walker to claim your surprise gift!
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