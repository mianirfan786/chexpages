import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from './actions';

import RestrictedRoute from './utils/routes/restrictedRoutes';
import PublicRoute from './utils/routes/publicRoutes';
// import logo from './logo.svg';
import {
  IntroContainer,
  LoginContainer,
  SignUpContainer,
  ForgotPasswordContainer,
  ResetPasswordContainer,
  VerifyEmailContainer,
  ConfirmEmailContainer,
  VehicleInspectionContainer,
  TranscationContainer,
  VehicleStatusContainer,
  ThankyouContainer,
  VehicleDetailContainer,
} from './Containers';
import './App.css';
import DownloadCertifcate from './Screens/Certificates/DownLoadCertificate';

function App(props) {
  const { currentUser } = props;
  let isAuthenticated = currentUser ? true : false;
  return (
    <Switch>
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/certificate" component={DownloadCertifcate} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/vehicleStatus" component={VehicleStatusContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/vehicleinspection" component={VehicleInspectionContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/transcationScreen" component={TranscationContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/VehicleDetail" component={VehicleDetailContainer} />
      <Route path="/thankyouScreen" component={ThankyouContainer} />
      <Route path="/transcationScreen" component={TranscationContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/register" component={SignUpContainer} />
      <Route path="/confirmEmail" component={ConfirmEmailContainer} />
      <Route path="/forgotpassword" component={ForgotPasswordContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/login" component={LoginContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/resetpassword" component={ResetPasswordContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/verifyEmail" component={VerifyEmailContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/" component={IntroContainer} />
    </Switch>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    vehicleData: state.auth.vehicleData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
