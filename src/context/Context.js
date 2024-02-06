import React, { useState, useContext, createContext } from 'react';

// Creating a context for TimeOver state
const TimeOverContext = createContext();

// Custom hook to use TimeOver context
export const useTimeOver = () => useContext(TimeOverContext);

// TimeOver provider component
export const TimeOverProvider = ({ children }) => {
  const [isTimeOver, setTimeOver] = useState(false);

  const handleSetTimeOver = (value) => {
    setTimeOver(value);
  };

  return (
    <TimeOverContext.Provider value={{ isTimeOver, setTimeOver: handleSetTimeOver }}>
      {children}
    </TimeOverContext.Provider>
  );
};