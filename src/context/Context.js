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





// Creating a new context for the clicked state
const ClickedContext = createContext();

// Custom hook to use Clicked context
export const useClicked = () => useContext(ClickedContext);

// Provider component for the Clicked context
export const ClickedProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <ClickedContext.Provider value={{ clicked, setClicked }}>
      {children}
    </ClickedContext.Provider>
  );
};