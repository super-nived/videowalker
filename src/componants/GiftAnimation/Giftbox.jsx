import React, { useEffect, useState } from 'react';
import './Giftbox.css';
import PIC from './question.png';

const Giftbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the open animation after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Giftbox-container">
      <div className="Giftbox-row">
        <div className="Giftbox-col-12"></div>
        <div className="Giftbox-col-12 Giftbox-mt-5 Giftbox-d-flex Giftbox-justify-content-center">
          <div className={`Giftbox-box ${isOpen ? 'open' : ''}`}>
            <div className="Giftbox-box-body">
              <img className="Giftbox-img" src={PIC} alt="Placeholder"/>
              <div className="Giftbox-box-lid">
                <div className="Giftbox-box-bowtie"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giftbox;
