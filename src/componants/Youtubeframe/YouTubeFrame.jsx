import React from 'react';
import './YouTube.css'; // Make sure to create this CSS file
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';

const YouTubeFrame = ({ videoId }) => {
  // Ensure you replace `YOUR_VIDEO_ID` with your actual YouTube video ID
  const iframeSrc = `https://www.youtube.com/embed/${"S5k3bYki51o"}?rel=0`;

  return (
    <>
    <Nav></Nav>
    <div className="youtube-container">
    <div className="intro-text">
        This is a simple tutorial for how to get free gifts from Video Walker.
      </div>
    <div className="iframe-container">
      <iframe
        src={iframeSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default YouTubeFrame;
