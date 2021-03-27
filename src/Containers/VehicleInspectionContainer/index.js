/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import imageCompression from 'browser-image-compression';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { VehicleInspectionScreen } from '../../Screens';
import ActionCreators from '../../actions';

const queryString = require('query-string');

const VehicleInspectionContainer = (props) => {
  const { addToast } = useToasts();
  const history = useHistory();

  const [isModalVisible, setModalValue] = useState(false);
  const [isSurveyModalVisible, setSurveyModal] = useState(false);
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

  const handleRequests = async () => {
    const { getVehicleFile, vehicleData, currentUser, getSurveyStatus } = props;
    await getSurveyStatus(currentUser?.id, setSurveyCheck);
    getVehicleFile(vehicleData?.id);
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
    setSurveyModal(value);
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

  const deleteFile = (groupType, id) => {
    const { deleteVehicleFile, vehicleData } = props;
    deleteVehicleFile(vehicleData.id, id, groupType);
  };
  useEffect(() => {
    handleRequests();
  }, []);
  return (
    <VehicleInspectionScreen
      rating={rating}
      vehicleInstructionValues={vehicleInstructionValues}
      vehicleInstructions={props.vehicleInstructions}
      isModalVisible={isModalVisible}
      isSurveyModalVisible={isSurveyModalVisible}
      isLoading={props.isLoading}
      surveyModalLoading={surveyModalLoading}
      handleImageUpload={handleImageUpload}
      handleModal={handleModal}
      deleteFile={deleteFile}
      handleModalClose={handleModalClose}
      handleVideoUpload={handleVideoUpload}
      handleSurveyModal={handleSurveyModal}
      changeRating={changeRating}
      handleCheckBox={handleCheckBox}
      handleComment={handleComment}
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

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInspectionContainer);
