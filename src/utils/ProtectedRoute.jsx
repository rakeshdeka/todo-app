import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
import { useAuth } from '../API/Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
