/* eslint-disable */

import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ActionCreators from '../../actions';
import Loading from '../../HOC/index';
import { VehicleInspectionScreen } from '../../Screens';

// const queryString = require('query-string');

const VehicleInspectionContainer = (props) => {
  const { addToast } = useToasts();
  const history = useHistory();

  const [isModalVisible, setModalValue] = useState(false);
  const [isSurveyModalVisible, setSurveyModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [fileToBeDeleted, setDeletingFile] = useState(null);
  const [imageCategory, setImageCategory] = useState(null);
  const [rating, setNewRating] = useState(0);
  const [comment, setComment] = useState('');
  const [surveyModalLoading, setSurveyModalLoading] = useState(false);
  const [surveyChecks, setSurveyChecks] = useState({
    online_services: false,
    face_time: false,
    visit_shop: false,
  });
  const [vehicleInstructionValues, setVehicleInstruction] = useState(null);
  const [groupType, setGroupType] = useState(null);
  const [surveyCheck, setSurveyCheck] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user?.updates || user?.updates === null || user?.updates === undefined) {
      window.location.replace('/logoutForChanges');
    }
    handleRequests();
  }, []);

  const handleRequests = () => {
    const { getVehicleFile, currentUser, getSurveyStatus } = props;
    getSurveyStatus(currentUser?.id, setSurveyCheck);
    getVehicleFile(currentUser?.vehicles[0]?.id);
  };

  const handleModal = (value, groupType) => {
    console.log(value, groupType);
    setImageCategory(value.id);
    setGroupType(groupType);
    setVehicleInstruction(value);
    setModalValue(!isModalVisible);
  };

  const handleModalClose = () => {
    setModalValue(false);
  };

  const changeRating = (newRating, name) => {
    setNewRating(newRating);
  };

  const handleImageUpload = (event) => {
    var imageFile = event.target.files[0];
    event.target.value = '';
    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        const { uploadFile, vehicleData } = props;
        uploadFile(compressedFile, { type: compressedFile.type }, vehicleData.id, imageCategory, groupType, setModalValue);
      })
      .catch(function (error) {});
  };

  const handleVideoUpload = (event) => {
    var videoFile = event.target.files[0];
    const { uploadFile, vehicleData } = props;
    uploadFile(videoFile, { type: videoFile.type }, vehicleData.id, imageCategory, groupType, setModalValue);
  };

  const handleSurveyModal = (value) => {
    if (surveyCheck) {
      setSurveyModal(value);
    } else {
      history.push('/transcationScreen');
    }
  };

  const handleCheckBox = (name, e) => {
    let obj = {
      ...surveyChecks,
      [name]: e.target.checked,
    };
    setSurveyChecks(obj);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitSurvey = async () => {
    const { submitSurvey } = props;
    const params = {
      ...surveyChecks,
      comment: comment,
      rating: rating,
    };
    await submitSurvey(params, addToast, setSurveyModal, setSurveyModalLoading);
    history.push('/transcationScreen');
  };

  const deleteFile = () => {
    const { deleteVehicleFile, vehicleData } = props;
    deleteVehicleFile(vehicleData.id, fileToBeDeleted?.id, fileToBeDeleted?.groupType, setDeleteLoading, setDeleteModal);
  };

  const handleDeleteModal = (groupType, id) => {
    setDeletingFile({ groupType, id });
    setDeleteModal(!isDeleteModal);
  };

  return (
    <VehicleInspectionScreen
      rating={rating}
      vehicleInstructionValues={vehicleInstructionValues}
      vehicleInstructions={props.vehicleInstructions}
      isModalVisible={isModalVisible}
      isSurveyModalVisible={isSurveyModalVisible}
      isLoading={props.isLoading}
      isDeleteModal={isDeleteModal}
      deleteLoading={deleteLoading}
      surveyModalLoading={surveyModalLoading}
      handleImageUpload={handleImageUpload}
      handleModal={handleModal}
      deleteFile={deleteFile}
      handleDeleteModal={handleDeleteModal}
      handleModalClose={handleModalClose}
      handleVideoUpload={handleVideoUpload}
      handleSurveyModal={handleSurveyModal}
      changeRating={changeRating}
      handleCheckBox={handleCheckBox}
      handleComment={handleComment}
      setDeleteModal={setDeleteModal}
      handleSubmitSurvey={handleSubmitSurvey}
    />
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    vehicleData: state.auth.vehicleData,
    isLoading: state.vehicleInstruction.isVehicleLoading,
    vehicleInstructions: state.vehicleInstruction,
    currentUser: state.auth.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading(VehicleInspectionContainer));
