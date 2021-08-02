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
  const [vehicleStatusLoading, setVehicleStatusLoading] = useState(false);
  const [uploadingPercentage, setuploadingPercentage] = useState(0);
  const [fileToBeDeleted, setDeletingFile] = useState(null);
  const [imageCategory, setImageCategory] = useState(null);
  const [rating, setNewRating] = useState(0);
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [commentError, setCommentError] = useState(false);
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
    // if (user?.updates || user?.updates === null || user?.updates === undefined) {
    //   window.location.replace('/logoutForChanges');
    // }
    handleRequests();
  }, []);

  const handleRequests = () => {
    const { getVehicleFile, currentUser, getSurveyStatus, getVehiclesStatus, match } = props;
    // getSurveyStatus(currentUser?.id, setSurveyCheck);
    getVehicleFile(match?.params?.id, setLoading);
    getVehiclesStatus(match?.params?.vehicleId, setLoading);
  };

  const handleModal = (value, groupType) => {
    setImageCategory(value.id);
    setGroupType(groupType);
    setVehicleInstruction(value);
    setModalValue(!isModalVisible);
  };

  const handleModalClose = () => {
    setModalValue(false);
    var video = document.getElementById('myVideo');
    video?.pause();
  };

  const changeRating = (newRating, name) => {
    setNewRating(newRating);
  };

  const handleImageUpload = async (event) => {
    var imageFile = event.target.files[0];
    event.target.value = '';
    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    await imageCompression(imageFile, options)
      .then(function (compressedFile) {
        const { uploadFile, match } = props;

        uploadFile(compressedFile, { type: compressedFile.type }, match?.params?.id, imageCategory, groupType, setModalValue, imageUploadingProgress);
      })
      .catch(function (error) { });
    setuploadingPercentage(0);
  };

  const handleVideoUpload = async (event) => {
    var videoFile = event.target.files[0];
    event.target.value = '';

    const { uploadFile, match } = props;
    uploadFile(videoFile, { type: videoFile.type }, match?.params?.id, imageCategory, groupType, setModalValue, imageUploadingProgress);
    setuploadingPercentage(0);
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
    setCommentError(false);
    setComment(e.target.value);
  };

  const handleSubmitSurvey = async () => {
    const { submitSurvey } = props;
    if (comment) {
      const params = {
        ...surveyChecks,
        comment: comment,
        rating: rating,
      };
      await submitSurvey(params, addToast, setSurveyModal, setSurveyModalLoading, history);
    } else {
      setCommentError(true);
    }
  };

  const deleteFile = () => {
    const { deleteVehicleFile } = props;
    deleteVehicleFile(fileToBeDeleted?.id, fileToBeDeleted?.groupType, setDeleteLoading, setDeleteModal);
  };

  const handleDeleteModal = (groupType, id) => {
    setDeletingFile({ groupType, id });
    setDeleteModal(!isDeleteModal);
  };

  const imageUploadingProgress = (progressEvent) => {
    const { loaded, total } = progressEvent;
    let percent = Math.floor(loaded * 100) / total;
    setuploadingPercentage(percent);
  };

  const handleChangeVehicleStatus = () => {
    const { changeVehicleStatus, match } = props;
    changeVehicleStatus(match?.params?.id, setVehicleStatusLoading, history);
  };
  const handleSkipPayment = (paymentStatus) => {
    const { match, skipPaymentMethod } = props;
    skipPaymentMethod(match?.params?.id, setVehicleStatusLoading, history, paymentStatus);
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
      uploadingPercentage={uploadingPercentage}
      currentUser={props.currentUser}
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
      commentError={commentError}
      paymentStatus={props.paymentStatus}
      match={props.match.params}
      changeVehicleStatus={handleChangeVehicleStatus}
      vehicleStatusLoading={vehicleStatusLoading}
      handleSkipPayment={handleSkipPayment}
      vehicleStatus={props?.vehicleStatus}
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
    vehicleStatus: state.vehicleInstruction.vehicleStatus,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading(VehicleInspectionContainer));
