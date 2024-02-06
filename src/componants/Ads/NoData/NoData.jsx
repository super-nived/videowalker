import React, { useState, useEffect } from 'react';
import { firestore } from '../../../firebase/firebase';
import PIC from '../../../asset/boy.png';
import './NoData.css'
import { useTimeOver } from '../../../context/Context';
function CountdownTimer({}) {
  const [targetTime, setTargetTime] = useState(null);
  const [countdown, setCountdown] = useState('');
  // Get the image URL from local storage or use default
  const image = localStorage.getItem('Image') || PIC;
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
  
            // Check if targetTime exists in the document
            if (data.hasOwnProperty('targetTime')) {
              let targetTime = data.targetTime;
  
              // Handle Firestore Timestamp
              if (targetTime && typeof targetTime.toDate === 'function') {
                setTargetTime(new Date(targetTime.toDate()));
              } 
              // Handle UNIX timestamp (number)
              else if (targetTime && !isNaN(targetTime)) {
                setTargetTime(new Date(targetTime * 1000)); // Convert UNIX timestamp to milliseconds
              } 
              // Handle date string
              else if (targetTime && typeof targetTime === 'string') {
                setTargetTime(new Date(targetTime));
              } else {
                console.error("targetTime is not available or in an unrecognized format");
              }
            } else {
              console.log("Document does not contain targetTime");
              // Handle the absence of targetTime appropriately
              // For example, you might want to set targetTime to null or a default value
              setTargetTime(null); // or any default value you see fit
            }
          }
        } else {
          console.log("No active advertisements found");
        }
      } catch (error) {
        console.error("Error fetching active advertisement:", error);
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
        setTimeOver(true)
      } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Construct countdown string conditionally based on the days value
        let countdownString = `${days > 0 ? days + 'd ' : ''}${hours}h ${minutes}m ${seconds}s`;
        setCountdown(countdownString);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [targetTime]);
  
console.log(';;;;;;;;;;;;;;;;;;;;;;;countdown',targetTime)
  return (
    <div className='container ' id='empty ' style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="empty-state">
        <div className="empty-state__content">
          <div className="empty-state__icon">
            <img src={image} alt="Countdown Timer" />
          </div>
          <div className="empty-state__message">Please Wait. The Secret Code Will Reveal {countdown}</div>
          <div className="empty-state__help">
            Stay tuned...
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
