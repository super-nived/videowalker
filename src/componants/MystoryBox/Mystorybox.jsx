import React, { useEffect, useState } from "react";
import './Mystorybox.css';
import Navbar from "./Navbar";
import { fetchAdvertisers } from "../../utils/firebaseUtils";
import Loading from "../Loading/Loading";
import Company from "./Company";
import Gifts from "./Image";

function Mystorybox() {
  const [advertisers, setAdvertisers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAdvertisers = async () => {
      setIsLoading(true);
      setError(null);

      const result = await fetchAdvertisers();
      if (result.success) {
        setAdvertisers(result.data);
      } else {
        setError(result.error);
      }
      setIsLoading(false);
    };

    const initialLoading = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      loadAdvertisers();
    };

    initialLoading();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="Mystorybox-main-container">
      <div className="Mystorybox-inner-container">
        <Navbar />
        <div className="Mystorybox-content-container">
          <Gifts advertisers={advertisers} />
          <Company advertisers={advertisers} />
        </div>
      </div>
    </div>
  );
}

export default Mystorybox;
