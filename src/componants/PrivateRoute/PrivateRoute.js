import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';// Make sure this path is correct


 const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // useAuth is your custom hook from AuthContext

  if (!currentUser) {
    // If there is no current user, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children; // If the user is authenticated, render the children components
};


export default  ProtectedRoute