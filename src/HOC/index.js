/* eslint-disable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Loading } from '../Components';

const getVehicleStatusWrapper = (ChildComponent) => {
  const GetVehicleStatus = (props) => {
    const [loadingStatus, setLoadingStatus] = useState(false);
    const history = useHistory();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      setLoadingStatus(true);
      axios
        .get(`${process.env.REACT_APP_DEVELOPMENT_URL}/vehicle/review/status/${user?.vehicles[0]?.id}`)
        .then((resp) => {
          setLoadingStatus(false);
          if (resp.data.review_status === 'IN_PROGRESS') {
            setTimeout(() => {
              history.push('/vehicleInspection');
            }, 2000);
          } else {
            history.push('/vehicleStatus');
          }
        })
        .catch((err) => {
          setLoadingStatus(false);
        });
    }, []);

    return loadingStatus ? <Loading /> : <ChildComponent {...props} />;
  };
  return GetVehicleStatus;
};

export default getVehicleStatusWrapper;
