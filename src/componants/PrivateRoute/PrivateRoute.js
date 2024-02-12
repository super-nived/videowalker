import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
 // Adjust the import path according to your project structure

const PrivateRoute = () => {

  const { currentUser } = useAuth(); // Get the current user from the auth context
  console.log('lsdfkjsdlkfsdlkjfskljd',currentUser)
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;