import React, { useState, useEffect } from 'react';
import { storage, firestore } from '../../firebase/firebase';
import '../uploading/Uploading.css'

import { useParams } from 'react-router-dom';
import Nav from '../../componants/navbar/Nav';

function Updating() {
  const {documentId} = useParams();
  console.log('lksdfjlksdjlfkasldjkf',documentId)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    company_name: '',
    company_website: '',
    adverticement_price: '',
    treasure_task: '',
    treasure_location: '',
    active: 'yes',
    task_over: 'no',
    content: '',
    targetTime:''
    // company_image and treasure_image initially don't have default values;
    // they're handled via file inputs
  });

  useEffect(() => {
    if (documentId) {
      setLoading(true);
      firestore.collection('advertisements').doc(documentId).get().then(doc => {
        if (doc.exists) {
          setData(doc.data());
          console.log(doc.data,'lllllllllllllllllllllll')
        } else {
          setError('Document not found');
        }
        setLoading(false);
      }).catch(err => {
        setError(`Error fetching document: ${err.message}`);
        setLoading(false);
      });
    }
  }, [documentId]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const updatedData = { ...data };
    const files = ['company_image', 'treasure_image'];
    for (let file of files) {
      if (updatedData[file] instanceof File) {
        const storageRef = storage.ref();
        const fileRef = storageRef.child('images/' + updatedData[file].name);
        await fileRef.put(updatedData[file]);
        updatedData[file] = await fileRef.getDownloadURL();
      }
    }

    try {
      await firestore.collection('advertisements').doc(documentId).set(updatedData, { merge: true });
      alert('Document updated successfully');
    } catch (err) {
      setError(`Error updating document: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const optionStyle = {
    width: '100%',
    padding: '1.5rem',
    backgroundColor: 'transparent',
    border: '1px solid var(--color-bg1)', // Adjust according to your CSS variables or theme
    resize: 'none',
    borderRadius: '0.5rem',
    color: 'white', // Ensure this fits your theme; it's set for dark mode here
  };

  return (
    <>
    <Nav></Nav>
    <div className="container fc Updating__container">
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="company_name" type="text" placeholder='company name' value={data.company_name || ''} onChange={handleChange} />
        <input name='company_website' type="text" placeholder='company website link' value={data.company_website || ''} onChange={handleChange} />
        <input name='company_image' type="file" onChange={handleChange} />
        <input name='adverticement_price' type="number" placeholder='advertisement price' value={data.adverticement_price || ''} onChange={handleChange} />
        <hr />
        <input name='treasure_task' type='text' placeholder='task' value={data.treasure_task || ''} onChange={handleChange} />
        <input name='treasure_location' type="text" placeholder='treasure location' value={data.treasure_location || ''} onChange={handleChange} />
        <input type="datetime-local" id="targetTime" name="targetTime" required  value={data.targetTime || ''} onChange={handleChange}  />
        <label htmlFor="active">Make it AD</label>
        <select name="active" id="active" value={data.active || 'yes'} onChange={handleChange} required>
          <option style={optionStyle} value="yes">Yes</option>
          <option style={optionStyle} value="no">No</option>
        </select>
        <label htmlFor="task_over">Is the Task Over?</label>
        <select name="task_over" id="task_over" value={data && data.task_over ? data.task_over : 'no'} onChange={handleChange} required>
          <option style={optionStyle} value="yes">Yes</option>
          <option style={optionStyle} value="no">No</option>
        </select>
        <textarea name="content" placeholder='text your message' value={data.content || ''} onChange={handleChange} required></textarea>
        <button className='btn btn-primary' type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Update Document'}
        </button>
      </form>
    </div></>
  );
}

export default Updating;
