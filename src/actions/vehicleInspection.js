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

function setDeleteLocalFile(data) {
  return {
    type: types.SET_DELETE_LOCAL_FILE,
    deleteFileData: data,
  };
}

function setVehicleStatus(data) {
  return {
    type: types.SET_VEHICLE_STATUS,
    vehicleStatus: data,
  };
}

function setCertificateData(data) {
  return {
    type: types.SET_CERTIFICATE_DATA,
    vehicleCertificate: data,
  };
}

export function uploadFile(file, params, vehicle_id, category, groupType, setModalValue, imageUploadingProgress) {
  return (dispatch) => {
    dispatch(setVehicleLoading(true));
    axios
      .post(`${Api}/file/upload`, params, {
        headers,
      })
      .then((resp) => {
        const { key, url } = resp.data;
        dispatch(uploadToS3(file, key, url, vehicle_id, category, params.type, groupType, setModalValue, imageUploadingProgress));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function uploadToS3(file, key, uploadUrl, vehicle_id, category, ext, groupType, setModalValue, imageUploadingProgress) {
  return (dispatch) => {
    const headers = {
      'Content-Type': 'img/png',
    };
    axios
      .put(`${uploadUrl}`, file, {
        headers,
        onUploadProgress: imageUploadingProgress,
      })
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
      .get(`${Api}/filesAll/${vehicleId}`, { headers })
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

export function submitSurvey(params, addToast, setSurveyModal, setSurveyModalLoading, history) {
  return (dispatch) => {
    setSurveyModalLoading(true);
    axios
      .post(`${Api}/create/survey`, params, { headers })
      .then((resp) => {
        addToast(`You survey has been submitted successfully`, { appearance: 'success' });
        setSurveyModal(false);
        setSurveyModalLoading(false);
        history.push('/transcationScreen');
      })
      .catch((err) => {
        setSurveyModalLoading(false);
        console.log(err);
      });
  };
}

export function getSurveyStatus(id, setSurveyCheck) {
  return (dispatch) => {
    axios
      .get(`${Api}/survey/user/${id}`, { headers })
      .then((resp) => {
        if (resp.data === null) {
          setSurveyCheck(true);
        } else {
          setSurveyCheck(false);
        }
      })
      .catch((err) => {});
  };
}

export function deleteVehicleFile(vehicleId, fileId, groupType, deleteVehicleFile, setDeleteModal) {
  return (dispatch) => {
    deleteVehicleFile(true);
    axios
      .delete(`${Api}/files/${vehicleId}/${fileId}`, { headers })
      .then((resp) => {
        dispatch(setDeleteLocalFile({ fileId, groupType }));
        setDeleteModal(false);
        deleteVehicleFile(false);
      })
      .catch((err) => {
        deleteVehicleFile(false);
      });
  };
}

export function getVehiclesStatus(vehicleId, setLoading) {
  return (dispatch) => {
    setLoading(true);
    axios
      .get(`${Api}/vehicle/company/${vehicleId}`, { headers })
      .then((resp) => {
        setLoading(false);
        dispatch(setVehicleStatus(resp.data));
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function getVehicleCertificate(params, setLoading) {
  return (dispatch) => {
    setLoading(true);
    axios
      .post(`${Api}/vehicle/${params.id}/files`, params, { headers })
      .then((resp) => {
        setLoading(false);
        dispatch(setCertificateData(resp.data));
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function changeVehicleStatus(vechileId, setVehicleStatusLoading, history) {
  return (dispatch) => {
    setVehicleStatusLoading(true);
    axios
      .post(`${Api}/vehicle/status/${vechileId}`, {}, { headers })
      .then((resp) => {
        setVehicleStatusLoading(false);
        history.push('/vehicleStatus');
      })
      .catch((err) => {
        setVehicleStatusLoading(false);
      });
  };
}
