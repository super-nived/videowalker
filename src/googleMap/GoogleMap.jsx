import React, { useEffect, useState } from 'react';
import './GoogleMap.css'
import { firestore } from '../firebase/firebase';

const StaticMap = () => {
  const [dynamicDestination, setDynamicDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const destinationRef = firestore.collection('mapLinks').doc('yourDocumentId');
      destinationRef.get().then((doc) => {
        if (doc.exists) {
          const url = doc.data().url;
          const urlParams = new URL(url).searchParams;
          const latLng = urlParams.get('q').split(',');
          const destination = {
            lat: parseFloat(latLng[0]),
            lng: parseFloat(latLng[1])
          };
          setDynamicDestination(destination);
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    };

    fetchDestination();
  }, []);

  const zoom = 15; // Zoom level
  const mapSrc = dynamicDestination 
    ? `https://www.google.com/maps?q=${dynamicDestination.lat},${dynamicDestination.lng}&hl=es;z=${zoom}&output=embed`
    : 'about:blank';

  const getDirections = (position) => {
    if (dynamicDestination) {
      const userLocation = position.coords;
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${dynamicDestination.lat},${dynamicDestination.lng}`;
      window.open(directionsUrl, '_blank');
    }
  };

  const handleDirectionsClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getDirections, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  console.log(dynamicDestination,'lllllllllllllllllll')
  const showError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  return (
    <div>
      <iframe  
        style={{ border: 0, width: '100%', height: '100%', borderRadius: '2rem' }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}>
      </iframe>
      {dynamicDestination && (
        <button 
          style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', cursor: 'pointer', zIndex: 100}}
          onClick={handleDirectionsClick}>
          Get Directions from Current Location
        </button>
      )}
    </div>
  );
};

export default StaticMap;
