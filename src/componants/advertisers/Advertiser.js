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
          .orderBy('adverticement_price', 'asc')
          .get();

        const advertiserData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAdvertisers(advertiserData);
        console.log(advertiserData,'lllllllllllllllllllllllllll')
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
        <h6>
        See all the  ads below, they're lined up by how many coins they offer
        </h6>
        { advertisers && advertisers.length <= 0 ? <Nodata></Nodata> :
        <div className="container team-container">


          
        
       
           {advertisers.map((advertiser) => (
              <article key={advertiser.id} className='team-member' style={{ border: advertiser && advertiser && advertiser.active === 'yes' && '1px solid white'  }}
              >
                <div className="team-member-image">
                  <img src={advertiser.company_image} alt={advertiser.company_name} />
                </div>
                <div className="team-member-info">
                  <h4>{advertiser.company_name}</h4>
                  <p> ₹ {advertiser.adverticement_price}</p>
                </div>
                <div className='team-member-socials'>
                  <a href={advertiser.company_website}>TAP HERE</a>
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
