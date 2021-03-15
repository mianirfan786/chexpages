import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from './actions';

// import RestrictedRoute from './utils/routes/restrictedRoutes';
// import PublicRoute from './utils/routes/publicRoutes';
// import logo from './logo.svg';
import { IntroContainer, LoginContainer, SignUpContainer, ForgotPasswordContainer, ResetPasswordContainer } from './Containers';
import './App.css';

function App() {
  return (
    <Switch>
      {/* <RestrictedRoute storeAuthenticate={isAuthenticated} allowed={authenticate} path="/subscriptionscreen" component={SubscriptionScreen} /> */}
      <Route path="/resetpassword" component={ResetPasswordContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/forgotpassword" component={ForgotPasswordContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={IntroContainer} />
    </Switch>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
