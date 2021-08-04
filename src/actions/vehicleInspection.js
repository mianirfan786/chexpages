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

function setInspectionByStatus(data) {
  return {
    type: types.SET_INSPECTION_BY_STATUS,
    inspectionByStatus: data,
  };
}

function setCertificateData(data) {
  return {
    type: types.SET_CERTIFICATE_DATA,
    vehicleCertificate: data,
  };
}

function setUberCertificate(data) {
  return {
    type: types.SET_UBER_CERTIFICATE_DATA,
    uberVehicleCertificate: data,
  };
}

function setLyftCertificate(data) {
  return {
    type: types.SET_LYFT_CERTIFICATE_DATA,
    lyftVehicleCertificate: data,
  };
}

function setVehicleDetails(data) {
  return {
    type: types.SET_VEHICLE_DETAILS,
    vehicleDetails: data,
  };
}

function setFileDetails(data) {
  return {
    type: types.SET_FILE_DETAILS,
    fileDetails: data,
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
        const params = { url: key, vehicle_id, category, extension: ext, groupType: groupType };
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
          if (dat.groupType === 'carVerificiationItems') {
            carVerificationItems.push(dat);
          } else if (dat.groupType === 'interiorItems') {
            interiorItems.push(dat);
          } else if (dat.groupType === 'exteriorItems') {
            exteriorItems.push(dat);
          } else if (dat.groupType === 'tires') {
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
      .catch((err) => { });
  };
}

export function deleteVehicleFile(fileId, groupType, deleteVehicleFile, setDeleteModal) {
  return (dispatch) => {
    deleteVehicleFile(true);
    axios
      .delete(`${Api}/files/${fileId}`, { headers })
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

export function getVehicleCertificate(params, setLoading, template) {
  return (dispatch) => {
    setLoading(true);
    axios
      .post(`${Api}/vehicle/${params?.id}/files`, { companyId: params?.companyId }, { headers })
      .then((resp) => {
        setLoading(false);
        if (template == 'template2') {
          dispatch(setCertificateData(resp.data));
        } else if (template === 'uber') {
          dispatch(setUberCertificate(resp.data));
        } else if (template === 'template3') {
          dispatch(setLyftCertificate(resp.data));
        }
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

export function getReportData(vechileId, setLoading) {
  setLoading(true);
  return (dispatch) => {
    axios
      .get(`${Api}/vehicle/${vechileId}/files`, { headers })
      .then((resp) => {
        dispatch(setCertificateData(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function skipPaymentMethod(vehicleId, setLoading, history, paymentStatus) {
  setLoading(true);
  return (dispatch) => {
    axios
      .post(`${Api}/vehicles/payment/${vehicleId}`, {}, { headers })
      .then((resp) => {
        if (paymentStatus) {
          history.push('/vehicleStatus');
        } else {
          history.push('/thankyouScreen');
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function getInspectionByStatus(params, setLoading) {
  setLoading(true);
  return (dispatch) => {
    axios
      .post(`${Api}/status/vehicle`, params, { headers })
      .then((resp) => {
        dispatch(setInspectionByStatus(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function createInspection(body, history) {
  // setLoading(true);
  return (dispatch) => {
    axios
      .post(`${Api}/create/inspection`, body, { headers })
      .then((resp) => {
        history.push(`/vehicleinspection/${resp?.data?.id}/${resp?.data?.vehicleId}`);
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
      });
  };
}

export function createReInspection(reInspectionId, body, history, setReInspectionModal) {
  // setLoading(true);
  return (dispatch) => {
    axios
      .post(`${Api}/create/reinspection/${reInspectionId}`, body, { headers })
      .then((resp) => {
        history.push(`/vehicleinspection/${resp?.data?.id}/${resp?.data?.vehicleId}`);
        setReInspectionModal(false);
        // setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
        setReInspectionModal(false);
      });
  };
}

export function getVehicleDetails(inspectionId, setLoading) {
  setLoading(true);
  return (dispatch) => {
    axios
      .get(`${Api}/vehicle/detail/${inspectionId}`, { headers })
      .then((resp) => {
        console.log('vehicle detail :: ', resp);
        dispatch(setVehicleDetails(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
}

export function getFileDetails(inspectionId, setLoading) {
  setLoading(true);
  return (dispatch) => {
    axios
      .get(`${Api}/files/details/${inspectionId}`, { headers })
      .then((resp) => {
        console.log('vehicle files :: ', resp);
        dispatch(setFileDetails(resp.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log('vehicle files :: ', err);
      });
  };
}
