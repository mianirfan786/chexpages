import axios from 'axios';
import * as types from '../utils/constants';
import { Api } from '../services/configs';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
};

function isAuthLoading(data) {
  return {
    type: types.IS_AUTH_LOADING,
    isAuthLoading: data,
  };
}

export function uploadImage(file, params, vehicle_id, category) {
  return (dispatch) => {
    axios
      .post(`${Api}/file/upload`, params, { headers })
      .then((resp) => {
        const { key, url } = resp.data;
        dispatch(uploadToS3(file, key, url, vehicle_id, category, params.type));
      })
      .catch((err) => {
        console.log(err);
        dispatch(isAuthLoading(false));
      });
  };
}

export function uploadToS3(file, key, uploadUrl, vehicle_id, category, ext) {
  return (dispatch) => {
    const headers = {
      'Content-Type': 'img/png',
    };
    axios
      .put(`${uploadUrl}`, file, { headers })
      .then((resp) => {
        const params = { url: key, vehicle_id, category, ext: ext };
        dispatch(addImageInDB(params));
      })
      .catch((err) => {
        console.log(err);
        dispatch(isAuthLoading(false));
      });
  };
}

export function addImageInDB(params) {
  return (dispatch) => {
    axios
      .post(`${Api}/vehicle/${params.vehicle_id}/file`, params, { headers })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        dispatch(isAuthLoading(false));
      });
  };
}
