import React, { useState, useEffect } from 'react';
import PIC from '../../../asset/boy.png'; // Ensure the path is correct for the image import
import './CountDown.css'; // Ensure this file exists and has the necessary styles
import Loading from '../../Loading/Loading'; // Ensure this file exists

function DummyCountdownTimer({ duration }) {
  const [countdown, setCountdown] = useState('');
  
  useEffect(() => {
    let seconds = duration;

    const interval = setInterval(() => {
      seconds -= 1;
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

      setCountdown(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);

      if (seconds <= 0) {
        clearInterval(interval);
        setCountdown('00:00:00');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  // You can handle the loading state as per your requirement
  return (
    <div className='container' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="empty-state">
        <div className="empty-state__content">
          <div className="empty-state__icon">
            <img src={PIC} alt="Countdown Timer" />
          </div>
          <div className="empty-state__message"><span>Please wait. The secret code will be revealed in</span><span style={{color:'white'}}> {countdown}</span></div>
          <div className="empty-state__help">
            Stay tuned...
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyCountdownTimer;
