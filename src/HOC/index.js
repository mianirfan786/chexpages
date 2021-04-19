/* eslint-disable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Loading } from '../Components';

const getVehicleStatusWrapper = (ChildComponent) => {
  const GetVehicleStatus = (props) => {
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [status, setStatus] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(true);
    const history = useHistory();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      const recommendScreen = JSON.parse(localStorage.getItem('doAndDont'));
      setLoadingStatus(true);
      axios
        .get(`${process.env.REACT_APP_DEVELOPMENT_URL}/vehicle/review/status/${user?.vehicles[0]?.id}`)
        .then((resp) => {
          setLoadingStatus(false);
          setStatus(resp.data.review_status);
          setPaymentStatus(resp.data.payment_status);
          if (resp.data.review_status === 'IN_PROGRESS' && recommendScreen) {
            setTimeout(() => {
              history.push('/vehicleInspection');
            }, 2000);
          } else if (!recommendScreen) {
            history.push('/doAndDoesScreen');
          } else {
            history.push('/vehicleStatus');
          }
        })
        .catch((err) => {
          setLoadingStatus(false);
        });
    }, []);

    return loadingStatus ? <Loading /> : <ChildComponent paymentStatus={paymentStatus} vehicleStatuss={status} {...props} />;
  };
  return GetVehicleStatus;
};

export default getVehicleStatusWrapper;
