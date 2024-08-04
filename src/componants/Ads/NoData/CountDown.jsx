// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import PIC from '../../../asset/boy.png';
import './CountDown.css';
import { useTimeOver } from '../../../context/Context';
import Loading from '../../Loading/Loading';

function CountdownTimer({ targetTime }) {
  const [countdown, setCountdown] = useState('');
  const { isTimeOver, setTimeOver } = useTimeOver();

  useEffect(() => {
    if (!targetTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(targetTime) - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown('Time is up!');
        setTimeOver(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownString = '';
        if (days > 0) {
          countdownString += `${days}d `;
        }
        if (hours > 0 || days > 0) {
          countdownString += `${hours}h `;
        }
        if (minutes > 0 || hours > 0 || days > 0) {
          countdownString += `${minutes}m `;
        }
        countdownString += `${seconds}s`;

        setCountdown(countdownString);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  if (!targetTime || countdown === '') {
    return <Loading />;
  }

  return (
    <div className='container' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="empty-state">
        <div className="empty-state__content">
          <div className="empty-state__icon">
            <img src={PIC} alt="Countdown Timer" />
          </div>
          <div className="empty-state__message"><span>Please wait. The secret code will be revealed in</span><span style={{color:'white'}}> {countdown ? countdown : " 00 : 00 : 00 "}</span></div>
          <div className="empty-state__help">
            stay tuned...
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
