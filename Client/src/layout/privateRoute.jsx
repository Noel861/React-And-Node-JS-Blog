import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

const PrivateRoute = ({ element, isAuthenticated, fallbackpath = '/login' }) => {
  return isAuthenticated == 'true' ? (
    element
  ) : (
    <Navigate to={fallbackpath} replace state={{ from: window.location.pathname}} />
  );
};

export default PrivateRoute;