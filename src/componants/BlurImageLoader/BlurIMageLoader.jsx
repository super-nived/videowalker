import React, { useState, useEffect } from 'react';

const BlurryLoadingImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => setLoaded(true);

  return (
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        style={{
          objectFit:'cover',
          width: loaded ? '100%' : '200%', // Initially scale up to simulate low-res
          height: loaded ? '100%' : '200%', // Adjust height accordingly
          filter: loaded ? 'none' : 'blur(20px)', // Apply blur effect
          transition: 'filter 0.5s ease-out, width 0.5s ease-out, height 0.5s ease-out', // Smooth transition
          transform: loaded ? 'none' : 'scale(0.5)', // Scale down if not loaded
          transformOrigin: 'top left', // Keep the image aligned
        }}
      />
  );
};

export default BlurryLoadingImage;
