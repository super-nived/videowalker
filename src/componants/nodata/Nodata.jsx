import React, { useEffect } from 'react'
import PIC from '../../asset/boy.png'
import './Nodata.css'
import { Link } from 'react-router-dom'
import { AiFillFileAdd } from 'react-icons/ai'
import { useTimeOver } from '../../context/Context'

function Nodata({link}) {
  const { isTimeOver, setTimeOver } = useTimeOver();
  
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
    <div className='container'style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div class="empty-state">
    <div class="empty-state__content">
      <div class="empty-state__icon">
      <img src={image}></img>
            </div>
      <div class="empty-state__message">The last secret code is revealed, and the gift is handed over... Next secret will be revealed at any time, so...</div>
      <div class="empty-state__help">
      stay tuned...
      </div>
    </div>
  </div>
  
 </div>
  )
}

export default Nodata