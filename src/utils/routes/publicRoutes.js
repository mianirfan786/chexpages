import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ allowed, vehicleData, ...params }) => {
  console.log(vehicleData && vehicleData);
  return !allowed ? <Route {...params} /> : <Redirect push to={`/vehicleinspection?vehicleId=${vehicleData?.id}`} />;
};

export default PublicRoute;
