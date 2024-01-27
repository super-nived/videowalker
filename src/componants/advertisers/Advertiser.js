import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase'; // Adjust this import based on your actual file structure
import './Advertiser.css';
import { AiOutlineMail } from 'react-icons/ai';
import Loading from '../Loading/Loading'; // Import your loading component
import Nodata from '../nodata/Nodata';

function Advertiser() {
  const [advertisers, setAdvertisers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvertisers = async () => {
      setIsLoading(true);
      setError(null);
      setTimeout(() => {

      }, 5000);
      try {
        const querySnapshot = await firestore.collection('advertisements')
          .orderBy('adverticement_price', 'desc')
          .get();

        const advertiserData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAdvertisers(advertiserData);
      } catch (error) {
        console.error("Error fetching advertisers:", error);
        setError('Failed to load advertisers.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdvertisers();
  }, []);
  console.log(advertisers.length,'lkdsflksdf')
  if (isLoading) {
    return <Loading />; // Your loading component
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {

        
      <section className='team'>
        <h2>Meet Our Advertiser</h2>
        <h5>
          Welcome! All our advertisers are listed below, sorted by the advertised amount.
        </h5>
        { advertisers && advertisers.length <= 0 ? <Nodata></Nodata> :
        <div className="container team-container">


          
        
       
           {advertisers.map((advertiser) => (
              <article key={advertiser.id} className='team-member'>
                <div className="team-member-image">
                  <img src={advertiser.company_image} alt={advertiser.company_name} />
                </div>
                <div className="team-member-info">
                  <h4>{advertiser.company_name}</h4>
                  <p> ₹ {advertiser.adverticement_price}</p>
                </div>
                <div className='team-member-socials'>
                  <a href={advertiser.company_website}>see website</a>
                </div>
              </article>
            ))}



          
        </div>
}
      </section>
}
    </div>
  );
}

export default Advertiser;
