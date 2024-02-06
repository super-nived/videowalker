import React, { useState } from 'react';
import { storage, firestore } from '../../firebase/firebase';

import "./Uploading.css";

function Uploading() {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const optionStyle = {
    width: '100%',
    padding: '1.5rem',
    backgroundColor: 'transparent',
    border: '1px solid var(--color-bg1)', // This might not work as expected
    resize: 'none',
    borderRadius: '0.5rem',
    color: 'white',
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Handle file uploads
    const files = ['company_image', 'treasure_image']; // Add file input names here
    for (let file of files) {
      if (data[file] && data[file].size) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child('images/' + data[file].name);
        await fileRef.put(data[file]);
        data[file] = await fileRef.getDownloadURL();
      }
    }

    // Add data to Firestore
    try {
      await firestore.collection('advertisements').doc().set(data);
    } catch (err) {
      setError('Error uploading data: ' + err.message);
      setLoading(false);
      return;
    }

    e.target.reset();
    setLoading(false);
  };

  return (
    <div className="container fc Uploading__container">
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="company_name" type="text" placeholder='company name' />
        <input name='company_website' type="text" placeholder='company website link' />
        <input name='company_image' type="file" />
        <input name='adverticement_price' type="number" placeholder='advertisement price' />
        <hr />
        <input name='treasure_task' type='text' placeholder='task' />
        <input name='treasure_location' type="text" placeholder='treasure location' />
        <input type="datetime-local" id="targetTime" name="targetTime" required />
        <select name="active" required>
           <option style={optionStyle} className="option" value="yes">Yes</option>
           <option style={optionStyle} className="option" value="no">No</option>
        </select> 
        <textarea name="content" placeholder='text your message' required></textarea>
        <button className='btn btn-primary' type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Uploading;
