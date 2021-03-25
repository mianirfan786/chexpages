/* eslint-disable */

import axios from 'axios';
import * as types from '../utils/constants';
import { Api } from '../services/configs';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
};

function setVehicleLoading(data) {
  return {
    type: types.IS_Vehicle_LOADING,
    isVehicleLoading: data,
  };
}

function setCarVerificationItems(data) {
  return {
    type: types.SET_CAR_VERIFICATION_ITEMS,
    carVerificationItem: data,
  };
}

function setInteriorItems(data) {
  return {
    type: types.SET_INTERIOR_ITEMS,
    interiorItems: data,
  };
}

function setExteriorItems(data) {
  return {
    type: types.SET_EXTERIOR_ITEMS,
    exteriorItems: data,
  };
}

function setTires(data) {
  return {
    type: types.SET_TIRES,
    tires: data,
  };
}

export function uploadFile(file, params, vehicle_id, category, groupType, setModalValue) {
  return (dispatch) => {
    dispatch(setVehicleLoading(true));
    axios
      .post(`${Api}/file/upload`, params, { headers })
      .then((resp) => {
        const { key, url } = resp.data;
        dispatch(uploadToS3(file, key, url, vehicle_id, category, params.type, groupType, setModalValue));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function uploadToS3(file, key, uploadUrl, vehicle_id, category, ext, groupType, setModalValue) {
  return (dispatch) => {
    const headers = {
      'Content-Type': 'img/png',
    };
    axios
      .put(`${uploadUrl}`, file, { headers })
      .then((resp) => {
        const params = { url: key, vehicle_id, category, ext: ext, group_type: groupType };
        dispatch(addFileInDB(params, setModalValue));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addFileInDB(params, setModalValue) {
  return (dispatch) => {
    axios
      .post(`${Api}/vehicle/${params.vehicle_id}/file`, params, { headers })
      .then((resp) => {
        dispatch(getVehicleFile(params.vehicle_id, setModalValue));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getVehicleFile(vehicleId, setModalValue) {
  return (dispatch) => {
    const carVerificationItems = [];
    const interiorItems = [];
    const exteriorItems = [];
    const tires = [];
    axios
      .get(`${Api}/files/${vehicleId}`, { headers })
      .then((resp) => {
        const { data } = resp;
        data.map((dat) => {
          if (dat.group_type === 'carVerificiationItems') {
            carVerificationItems.push(dat);
          } else if (dat.group_type === 'interiorItems') {
            interiorItems.push(dat);
          } else if (dat.group_type === 'exteriorItems') {
            exteriorItems.push(dat);
          } else if (dat.group_type === 'tires') {
            tires.push(dat);
          }
          dispatch(setCarVerificationItems(carVerificationItems));
          dispatch(setInteriorItems(interiorItems));
          dispatch(setExteriorItems(exteriorItems));
          dispatch(setTires(tires));
          dispatch(setVehicleLoading(false));
          if (setModalValue) {
            setModalValue(false);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
