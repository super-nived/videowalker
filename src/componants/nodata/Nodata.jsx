import React, { useEffect } from 'react'
import PIC from '../../asset/boy.png'
import './Nodata.css'
import { Link } from 'react-router-dom'
import { AiFillFileAdd } from 'react-icons/ai'

function Nodata({link}) {
  useEffect(() => {
    // Check local storage for the image URL
    const storedImage = localStorage.getItem('Image');

    // If not present, set the default image URL and save to local storage
    if (!storedImage) {
      localStorage.setItem('Image', PIC);
    }
  }, []);

  // Get the image URL from local storage
  const image = localStorage.getItem('Image') || PIC;
  return (
    <div className='container'>
      <div class="empty-state">
    <div class="empty-state__content">
      <div class="empty-state__icon">
      <img src={image}></img>
            </div>
      <div class="empty-state__message">No records has been added yet.</div>
      <div class="empty-state__help">
        please refresh or try again later
      </div>
    </div>
  </div>
  
 </div>
  )
}

export default Nodata