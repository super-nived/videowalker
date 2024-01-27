import React, { useEffect, useState } from 'react'
import './TresureDeatils.css'
import P1 from '../../asset/python.png'
import Scratch from '../scratch-card/Scratch'
import { firestore } from '../../firebase/firebase';
import Loading from '../Loading/Loading';
import Nodata from '../nodata/Nodata';


function TresureDeatils() {

  const [treasure, setTreasure] = useState({ image: '', location: '', company_name: '', company_website: '', company_image: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      
    }, 4000);
    const fetchTreasureDetails = async () => {
      const querySnapshot = await firestore.collection('advertisements')
        .where('company_name', '==', 'nike')
        .limit(1)
        .get();

      if (!querySnapshot.empty) {
        const treasureData = querySnapshot.docs[0].data();
        setTreasure(treasureData);
      }
      setIsLoading(false);
    };

    fetchTreasureDetails();
  }, []);


  console.log('lsdflskdfsldkjfsdlkf', treasure)

  return (
   <>
  {isLoading ? <Loading></Loading> :
  
  <section className='tresure_main'>
  {/* <h2>Today Tresure sponser by {treasure.company_name}</h2> */}
  <div className="container treasure-container">


  {!treasure.company_name ? <Nodata></Nodata> :
  <article className="treasure">
    <div className="treasure-image ">
      <span className='ad-sponser'>sponser</span>
      <a href={treasure.company_website}><img src={treasure.company_image} alt="image" /></a>
    </div>
    <div className="treasure-ifo">
      <Scratch></Scratch>
      <span>Scratch me</span>
    </div>
  </article>
}



  </div>

</section>
  }
   </>
  )
}


export default TresureDeatils