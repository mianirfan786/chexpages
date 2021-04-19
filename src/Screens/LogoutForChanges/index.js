import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../../Components';
import './style.css';
import '../../App.css';

const LogoutForChange = () => {
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const handleLogout = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setLoading(true);
      axios
        .put(`${process.env.REACT_APP_DEVELOPMENT_URL}/user/status/${user?.id}`, { updates: false })
        .then(async () => {
          setLoading(false);
          // await localStorage.clear();
          await localStorage.removeItem('currentUser');
          await localStorage.removeItem('token');
          await localStorage.removeItem('vehicleData');
          window.location.replace('/login');
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="login-main-container">
      <div className="login-image-background-signin">
        <div className="confirm-email-main-bg-signin">
          <div className="login-content-container">
            <h1 className="login-heading-logo">
              CHEX
              <span className="logo-span-color">.AI</span>
            </h1>
            <div className="login-desp-heading">Virtual Inspections</div>
            <p className="changes-paragraph">There are some new updates please logout in order to proceed</p>
            <Button loading={loading} title="Logout" onClickButton={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoutForChange;
