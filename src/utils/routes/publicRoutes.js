import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ allowed, ...params }) => {
  return !allowed ? <Route {...params} /> : <Redirect push to="/dashboard" />;
};

export default PublicRoute;
