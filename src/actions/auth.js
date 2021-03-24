import * as types from '../utils/constants';
import { Api } from '../services/configs';
import axios from 'axios';

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

function setCompanies(data) {
  return {
    type: types.SET_COMPANIES,
    companies: data,
  };
}

export function login(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .post(`${Api}/auth/login`, params)
      .then((resp) => {
        dispatch(isAuthLoading(false));
        dispatch(setCurrentUser(resp.data.data));
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('currentUser', JSON.stringify(resp.data.data));
        dispatch(setIsAuthenticated(true));
        history.push('/vehicleinspection');
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function register(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .post(`${Api}/auth/signup`, params)
      .then((resp) => {
        addToast(`User created successfully`, { appearance: 'success' });
        history.push(`/verifyEmail?email=${params.email}`);
        dispatch(isAuthLoading(false));
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function forgotPassword(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .post(`${Api}/auth/reset/email`, params)
      .then((resp) => {
        dispatch(isAuthLoading(false));
        addToast(`verification email has been sent to your account`, { appearance: 'success' });
        history.push(`/resetpassword?email=${params.email}`);
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function resetPassword(params, history, addToast) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .post(`${Api}/auth/reset/password`, params)
      .then((resp) => {
        addToast(`Your password has been changed successfully`, { appearance: 'success' });
        history.push(`/login`);
        dispatch(isAuthLoading(false));
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function resendEmail(params, addToast, history) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .post(`${Api}/users/resend/verify/email`, params)
      .then((resp) => {
        addToast(`${resp.message}`, { appearance: 'success' });
        dispatch(isAuthLoading(false));
        history.push('/login');
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function confirmEmail(email, token, addToast, history) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .get(`${Api}/users/verify/email?email=${email}&token=${token}`)
      .then((resp) => {
        addToast(`${resp.data}`, { appearance: 'success' });
        dispatch(isAuthLoading(false));
        history.push('/login');
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function getCompanies() {
  return (dispatch) => {
    axios
      .get(`${Api}/companies`)
      .then((resp) => {
        dispatch(setCompanies(resp.data));
      })
      .catch((err) => {});
  };
}
