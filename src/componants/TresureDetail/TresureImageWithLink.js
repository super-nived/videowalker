
import React, { useEffect, useState } from 'react';
import './TresureImageWithLink.css'
import { firestore } from '../../firebase/firebase';

function TreasureIMageWithLInk() {
    const [treasure, setTreasure] = useState({ image: '', location: '' });

    useEffect(() => {
      const fetchTreasureDetails = async () => {
        const querySnapshot = await firestore.collection('advertisements')
                                            .where('company_name', '==', 'nike')
                                            .limit(1)
                                            .get();
  
        if (!querySnapshot.empty) {
          const treasureData = querySnapshot.docs[0].data();
          setTreasure({
            image: treasureData.treasure_image, // Assuming field name is 'treasure_image'
            location: treasureData.treasure_location // Assuming field name is 'treasure_location'
          });
        }
      };
  
      fetchTreasureDetails();
    }, []);
  

    return (
      <div className='treasure_datails'>
        {treasure.image && <img src={treasure.image} alt="Treasure" />}
        {treasure.location && <a href={treasure.location} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Go to Treasure Location</a>}
      </div>
    );
  }
  
  export default TreasureIMageWithLInk;
  