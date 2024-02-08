import React, { createContext, useContext, useState, useEffect } from 'react';
import { Firebase } from '../firebase/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    return Firebase.auth().signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // This is the cleanup function
  }, []);

  const value = {
    currentUser,
    login
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
