import * as types from '../utils/constants';
import Api from '../services/api';

function setIsAuthenticated(params) {
  return {
    type: types.SET_ISAUTHENTICATED,
    isAuthenticated: params,
  };
}

function setCurrentUser(data) {
  return {
    type: types.SET_CURRENT_USER,
    currentUser: data,
  };
}

function isAuthLoading(data) {
  return {
    type: types.IS_AUTH_LOADING,
    isAuthLoading: data,
  };
}

export function login(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    Api.post('auth/login', params)
      .then((resp) => {
        console.log(resp);
        dispatch(isAuthLoading(false));
        dispatch(setCurrentUser(resp.data));
        dispatch(setIsAuthenticated(true));
        history.push('/vehicleinspection');
      })
      .catch((err) => {
        addToast(`${err.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function register(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    Api.post('auth/signup', params)
      .then((resp) => {
        addToast(`User created successfully`, { appearance: 'success' });
        history.push(`/verifyEmail?email=${params.email}`);
        dispatch(isAuthLoading(false));
      })
      .catch((err) => {
        addToast(`${err.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function forgotPassword(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    Api.post('auth/reset/email', params)
      .then((resp) => {
        dispatch(isAuthLoading(false));
        addToast(`verification email has been sent to your account`);
        history.push(`/resetpassword?email=${params.email}`);
      })
      .catch((err) => {
        addToast(`${err.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function resetPassword(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    Api.post('auth/reset/password', params)
      .then((resp) => {
        addToast(`${resp.message}`, { appearance: 'success' });
        history.push(`/login`);
        dispatch(isAuthLoading(false));
      })
      .catch((err) => {
        addToast(`${err.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function resendEmail(params, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    Api.post('users/resend/verify/email', params)
      .then((resp) => {
        addToast(`${resp.message}`, { appearance: 'success' });
        dispatch(isAuthLoading(false));
      })
      .catch((err) => {
        addToast(`${err.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function confirmEmail(email, token, addToast, history) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    Api.get(`users/verify/email?email=${email}&token=${token}`)
      .then((resp) => {
        addToast(`${resp}`, { appearance: 'success' });
        dispatch(isAuthLoading(false));
        history.push('/login');
      })
      .catch((err) => {
        addToast(`${err.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}
