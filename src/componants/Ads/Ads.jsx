import React, { useState, useEffect } from "react";
import { firestore } from '../../firebase/firebase';
import Loading from '../Loading/Loading';
import Nodata from '../nodata/Nodata';
import BlurIMage from '../../asset/Head.png'
import './Ads.css';
import CountdownTimer from "./NoData/CountDown";
import { useTimeOver } from "../../context/Context";
import BlurryLoadingImage from "../BlurImageLoader/BlurIMageLoader";

const Ads = () => {
  const [advertisers, setAdvertisers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uiReady, setUiReady] = useState(false);
  const [error, setError] = useState(null);
  const { isTimeOver, setTimeOver } = useTimeOver();
  

  useEffect(() => {
    const fetchAdvertisers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const querySnapshot = await firestore.collection('advertisements')
        .where('active', '==', 'yes')
        .limit(1)
        .get();
      
        const now = new Date(); // Current time for comparison

        const advertiserData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const targetTime = data.targetTime && data.targetTime.toDate
            ? data.targetTime.toDate()
            : data.targetTime;

          return {
            id: doc.id,
            ...data,
            targetTime: targetTime,
          };
        });

        setAdvertisers(advertiserData);
      } catch (error) {
        console.error("Error fetching advertisers:", error);
        setError('Failed to load advertisers.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdvertisers();
    if (!isLoading && advertisers.length > 0) {
      setTimeout(() => setUiReady(true), 300); // Adjust delay as needed
    }
  }, [isTimeOver]);

  if (error) {
    return <div className="error-message" style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Error: {error}</div>;
  }
  if(isLoading){
    <Loading></Loading>
  }
  if (!isTimeOver && advertisers.length !=0) {
    return <CountdownTimer />;
  }
  if (advertisers.length == 0 &&  !isLoading  ){
    return <Nodata></Nodata>
  }
  if (advertisers.some(ad => ad.active === 'yes' && ad.task_over === 'yes')) {
    return <Nodata />; // Show "No data" message if any advertiser is active and task is over
  }
  return (
    <div className="ads container">
      {advertisers.map((ad) => (
        <div key={ad.id} className="card">
          <div className="imgBx" >
            <span>sponser</span>
            <BlurryLoadingImage src={ad.company_image || ''} ></BlurryLoadingImage>
            
          </div>
          <div className="content">
            <h4>{ad.title || "FIND SECRET CODE"}</h4>
            <span style={{fontWeight:"700" , color: "red"  }}>{ad.treasure_task}</span>
            <p> * Only the first person to tell the secret code(above text in red) to the video walker can get the prize..</p> 
            <a href={ad.treasure_location}>VIDEO WALKER LOCATION</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ads;
