// useCountdownTimer.js
import { useState, useEffect } from 'react';

const useCountdownTimer = (targetTime) => {
  const [countdown, setCountdown] = useState('');
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    if (!targetTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(targetTime) - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown('Time is up!');
        setIsTimeOver(true);
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

  return { countdown, isTimeOver };
};

export default useCountdownTimer;
