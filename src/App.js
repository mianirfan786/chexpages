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
} from './Containers';
import './App.css';

function App(props) {
  const { currentUser } = props;
  let isAuthenticated = currentUser ? true : false;
  let vehicleData = JSON.parse(localStorage.getItem('vehicleData'));
  console.log(vehicleData);
  return (
    <Switch>
      <RestrictedRoute
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/vehicleinspection"
        component={VehicleInspectionContainer}
      />
      <RestrictedRoute
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/transcationScreen"
        component={TranscationContainer}
      />
      <Route path="/transcationScreen" component={TranscationContainer} />
      <PublicRoute
        vehicleData={vehicleData}
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/register"
        component={SignUpContainer}
      />
      <Route path="/confirmEmail" component={ConfirmEmailContainer} />
      <Route path="/forgotpassword" component={ForgotPasswordContainer} />
      <PublicRoute
        vehicleData={vehicleData}
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/login"
        component={LoginContainer}
      />
      <PublicRoute
        vehicleData={vehicleData}
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/resetpassword"
        component={ResetPasswordContainer}
      />
      <PublicRoute
        vehicleData={vehicleData}
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/verifyEmail"
        component={VerifyEmailContainer}
      />
      <PublicRoute
        vehicleData={vehicleData}
        storeAuthenticate={isAuthenticated}
        allowed={isAuthenticated}
        path="/"
        component={IntroContainer}
      />
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
