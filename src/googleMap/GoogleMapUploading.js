// LocationUploadComponent.js
import React, { useState } from 'react';
import { firestore } from '../firebase/firebase';
import './GoogleMap.css'


const LocationUploadComponent = () => {
  const [mapLink, setMapLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reference to a Firestore document
      const linkDoc = firestore.collection('mapLinks').doc('yourDocumentId');
      await linkDoc.set({ url: mapLink });
      console.log("Link stored successfully!");
      setMapLink(''); // Reset the input field
    } catch (error) {
      console.error("Error storing link: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
    <input
        type="text"
        value={mapLink}
        onChange={(e) => setMapLink(e.target.value)}
        placeholder="Enter Google Maps link"
    />
    <button type="submit">Upload Link</button>
</form>
  );
};

export default LocationUploadComponent;
