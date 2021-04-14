import * as types from '../utils/constants';
import { Api } from '../services/configs';
import axios from 'axios';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
};

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

function setVehicleData(data) {
  return {
    type: types.SET_VEHCILE_DATA,
    vehicleData: data,
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
        dispatch(setVehicleData(resp.data.vehicleData));
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('currentUser', JSON.stringify(resp.data.data));
        localStorage.setItem('vehicleData', JSON.stringify(resp.data.data.vehicles[0]));
        localStorage.setItem('recommendScreen', JSON.stringify(resp.data.data?.recommendation_seen));
        dispatch(setIsAuthenticated(true));
        window.location.reload(`/vehicleinspection`);
      })
      .catch((err) => {
        addToast(`${err.response.data.message}`, { appearance: 'error' });
        dispatch(isAuthLoading(false));
      });
  };
}

export function register(params, history, addToast, lyftUser) {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    axios
      .post(`${Api}/auth/signup`, params)
      .then((resp) => {
        addToast(`User created successfully`, { appearance: 'success' });
        history.push(`/verifyEmail?email=${params.email}&lyftUser=${lyftUser}&userId=${resp.data.user.id}`);
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
        addToast(`verification code has been sent to your account`, { appearance: 'success' });
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

export function contactUs(data, addToast, history, setLoading) {
  return (dispatch) => {
    setLoading(true);
    axios
      .post(`${Api}/auth/contactUs`, data, { headers })
      .then((resp) => {
        addToast(`Your message has been delivered to support`, { appearance: 'success' });
        // history.replace('/');
        setLoading(false);
      })
      .catch((err) => {
        addToast('Something went wrong', { appearance: 'error' });
        setLoading(false);
      });
  };
}

export function changeRecommendation(setLoading, history) {
  return (dispatch) => {
    setLoading(true);
    axios
      .post(`${Api}/user/status/recommended`, {}, { headers })
      .then((resp) => {
        localStorage.setItem('recommendScreen', true);
        history.replace('/vehicleinspection');

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function setLyftUserStatus(params, setVisible, user_id, setLoading) {
  return (dispatch) => {
    setLoading(true);
    axios
      .put(`${Api}/user/status/${user_id}`, params, { headers })
      .then((resp) => {
        setVisible(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}
