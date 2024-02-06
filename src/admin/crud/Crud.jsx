import React, { useEffect, useState } from 'react';
import './Crud.css';
import {ImManWoman} from 'react-icons/im'
import {AiOutlineTrophy} from 'react-icons/ai'
import {RiBuildingFill} from 'react-icons/ri'
import PIC from '../../../src/asset/boy.png'
import Loading from '../../componants/Loading/Loading';
import { firestore } from '../../firebase/firebase';
import Nodata from '../../componants/nodata/Nodata';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../../componants/Ads/NoData/NoData';

function Crud() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const fetchDocuments = async () => {
        setLoading(true);
        try {
          const snapshot = await firestore.collection('advertisements').get();
          const docs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setDocuments(docs);
        } catch (err) {
          setError('Error fetching data: ' + err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDocuments();
    }, []);
  
    const handleEdit = (id) => {
        navigate(`/update/${id}`);
      console.log('Editing:', id);
      // Implement edit functionality
    };
  
    const handleDelete = async (id) => {
        if(window.confirm("Are you sure you want to delete this item?")) {
          try {
            await firestore.collection('advertisements').doc(id).delete();
            console.log('Item deleted successfully');
            // Optionally, refresh the documents list or navigate as needed
            setDocuments(documents.filter(doc => doc.id !== id));
          } catch (err) {
            console.error('Error deleting document:', err.message);
            // Update your UI to show the error
          }
        }
      };
  
    if (loading) {
      return <Loading></Loading>;
    }
  
    if (error) {
      return <div className="error">{error}</div>;
    }
  
    if (documents.length === 0) {
      return <CountdownTimer />; // Render Nodata component when there are no documents
    }
  
    return (
        <div className="Crud">
          <section className='about-achievements'>
            <div className='container about-achievements-container'>
              <div className="about-right">
                <h1>EDIT</h1>
                <p>In this page, you can edit all your data.</p>
                <div className="achievements-cards">
                  {documents.map((doc) => (
                    <article  key={doc.id} className='achievement-card' style={{ border: doc&& doc && doc.active === 'yes' && '3px solid white'  }}>
                      <span className='achievement-icon'><ImManWoman /></span>
                      <h3> {doc.company_name || 'Company Name Not Available'}</h3>
                      <p>₹ {doc.adverticement_price || 'Price Not Available'}</p>
                       <div className="butons-div"> <button  onClick={() => handleEdit(doc.id)}>Edit</button>
                      <button onClick={() => handleDelete(doc.id)}>Delete</button></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Crud;
