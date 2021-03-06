/* eslint-disable */

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
  DoAndDoesContainer,
  TermsAndPolicyContainer,
    ContactUsContainer,
  LyftCertificateContainer,
  VehicleCombinedStatusContainer,
  VehicleAfterReviewingContainer,
} from './Containers';
import { LogoutForChanges } from '../src/Screens';

import './App.css';
import UberInspectionContainer from "./Containers/UberInspectionContainer";
import LyftInspectionContainer from "./Containers/LyftInspectionContainer";
import HomeLandingContainer from './Containers/HomeLandingContainer'

function App(props) {
  const doAndDont = localStorage.getItem('doAndDont');
  if (doAndDont == false) {
    localStorage.setItem('doAndDont', false);
  }
  const { currentUser } = props;
  let isAuthenticated = currentUser ? true : false;
  return (
    <Switch>
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/vehicleinspection/:id/:vehicleId" component={VehicleInspectionContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/transcationScreen/:id/:vehicleId" component={TranscationContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/userVehicleStatus" component={VehicleCombinedStatusContainer} />
      <Route storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/logoutForChanges" component={LogoutForChanges} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/vehicleStatus" component={VehicleStatusContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/VehicleAfterReviewing/:id/:vehicleId" component={VehicleAfterReviewingContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/contactUs" component={ContactUsContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/doAndDoesScreen" component={DoAndDoesContainer} />
      <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/vehicleDetail" component={VehicleDetailContainer} />
      <Route path="/termsAndPolicy" component={TermsAndPolicyContainer} />
        <Route path='/homelanding' component={HomeLandingContainer}/>
        <Route path="/uber-inspection" component={UberInspectionContainer} />

        <Route path="/lyft-inspection" component={LyftInspectionContainer} />
      <Route path="/thankyouScreen" component={ThankyouContainer} />
      {/* <Route path="/transcationScreen" component={TranscationContainer} /> */}
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/register" component={SignUpContainer} />
      <Route path="/confirmEmail" component={ConfirmEmailContainer} />
      <Route path="/forgotpassword" component={ForgotPasswordContainer} />
      <Route path="/LyftCertificate" component={LyftCertificateContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/login" component={LoginContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/resetpassword" component={ResetPasswordContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/verifyEmail" component={VerifyEmailContainer} />
      <PublicRoute storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/" component={IntroContainer} />
      {/* <RestrictedRoute exact storeAuthenticate={isAuthenticated} allowed={isAuthenticated} path="/logoutForChanges" component={LogoutForChanges} /> */}
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
