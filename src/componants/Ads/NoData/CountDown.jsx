// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import { firestore } from '../../../firebase/firebase';
import PIC from '../../../asset/boy.png';
import './CountDown.css';
import { useTimeOver } from '../../../context/Context';
import Loading from '../../Loading/Loading';

function CountdownTimer() {
  const [targetTime, setTargetTime] = useState(null);
  const [countdown, setCountdown] = useState('');
  const [loading, setLoading] = useState(true);
  const { isTimeOver, setTimeOver } = useTimeOver();

  useEffect(() => {
    const fetchTargetTime = async () => {
      try {
        const querySnapshot = await firestore.collection('advertisements')
                                             .where('active', '==', 'yes')
                                             .limit(1)
                                             .get();

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          if (doc.exists) {
            const data = doc.data();

            if (data.hasOwnProperty('targetTime')) {
              let targetTime = data.targetTime;

              if (targetTime && typeof targetTime.toDate === 'function') {
                setTargetTime(new Date(targetTime.toDate()));
              } else if (targetTime && !isNaN(targetTime)) {
                setTargetTime(new Date(targetTime * 1000));
              } else if (targetTime && typeof targetTime === 'string') {
                setTargetTime(new Date(targetTime));
              } else {
                console.error("targetTime is not available or in an unrecognized format");
              }
            } else {
              console.log("Document does not contain targetTime");
              setTargetTime(null);
            }
          }
        } else {
          console.log("No active advertisements found");
        }
      } catch (error) {
        console.error("Error fetching active advertisement:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTargetTime();
  }, []);

  useEffect(() => {
    if (!targetTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetTime - now;

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

  if (loading && !targetTime && !countdown) {
    return <Loading />;
  }

  return (
    <div className='container' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="empty-state">
        <div className="empty-state__content">
          <div className="empty-state__icon">
            <img src={PIC} alt="Countdown Timer" />
          </div>
          <div className="empty-state__message"><span>Please wait. The secret code will be revealed in</span><span> {countdown ? countdown : " 00 : 00 : 00 "}</span></div>
          <div className="empty-state__help">
            stay tuned...
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
