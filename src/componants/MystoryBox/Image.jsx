// Gifts.js
import React, { useState, useEffect } from "react";
import './Mystorybox.css';
import BannerImage from './Gift.png';
import ICON from '../../asset/Logo.png';
import Modal from "../modal/Modal";
import PIC from '../../asset/boy.png';

import useCountdownTimer from "../../hooks/useCountdownTimer";
import BlurryLoadingImage from "../BlurImageLoader/BlurIMageLoader";

function Gifts({ advertisers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(''); // 'gift' or 'location'
  const [targetTime, setTargetTime] = useState(null);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (advertisers.length > 0) {
      setTargetTime(advertisers[0].targetTime);
      if (advertisers[0].active === 'yes' && advertisers[0].task_over === "yes") {
        setIsWinner(true);
      }
    }
  }, [advertisers]);

  const { countdown, isTimeOver } = useCountdownTimer(targetTime);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const handleLocationClick = (e) => {
    if (!isTimeOver) {
      e.preventDefault();
      openModal('location');
    }
  };

  return (
    <div className="gift-container">
      <div className="gift-banner">
        <div className="gift-banner-image">
          <div className="tap-overlay" onClick={() => openModal('gift')}>
            <small className="overlay-content">tap see it</small>
          </div>
          <img src={BannerImage} alt="Banner" onClick={() => openModal('gift')} />
        </div>
        <h2 className="title">Discover The Mysterious Gift For You</h2>
        <p className="content">
          Hurry! Find your treasure quickly. The first to find the gift gets to keep it. Use the location and image buttons to help you. Tap the image button to see where it's placed and the location button to navigate there.
        </p>

        <div className="gift-icon">
          {/* <img className="icon" src={ICON} alt="Gift Icon" /> */}
          <button className="btn btn-primary">
            <a href={advertisers[0]?.treasure_location} onClick={handleLocationClick}>Location</a>
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent === 'gift' ? (
          isTimeOver && isWinner ? (
            <div>
              <BlurryLoadingImage src={advertisers[0]?.winner_image} />
              <p className="winner-message">Today's treasure hunt is over! Congratulations to our winner. You can see the winner above.</p>
            </div>
          ) : isTimeOver ? (
            <BlurryLoadingImage src={advertisers[0]?.treasure_image} />
      
          ) : (
            <div className='countdown-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="countdown-content">
                <div className="countdown-icon">
                  <img src={PIC} alt="Countdown Timer" />
                </div>
                <div className="countdown-message">
                  <span> The treasure hunt will begin in <span style={{color:"green" ,fontWeight:"600"}}>{countdown ? countdown : "00:00:00"}</span>. Once the time is up, you can see the image of the gift and where it is placed.</span>
                </div>
                <div className="countdown-help">
                  stay tuned...
                </div>
              </div>
            </div>
          )
        ) : (
          <div className='countdown-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="countdown-content">
              <div className="countdown-icon">
                <img src={PIC} alt="Countdown Timer" />
              </div>
              <div className="countdown-message">
                <span> The treasure hunt will begin in <span style={{color:"green" ,fontWeight:"600"}}>{countdown ? countdown : "00:00:00"}</span>. Once the time is up, you can follow the location to find your treasure.</span>
              </div>
              <div className="countdown-help">
                stay tuned...
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Gifts;
