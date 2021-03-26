/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import imageCompression from 'browser-image-compression';
import { bindActionCreators } from 'redux';

import { VehicleInspectionScreen } from '../../Screens';
import ActionCreators from '../../actions';

const VehicleInspectionContainer = (props) => {
  const [isModalVisible, setModalValue] = useState(false);
  const [isSurveyModalVisible, setSurveyModal] = useState(true);
  const [imageCategory, setImageCategory] = useState(null);

  const [vehicleInstructionValues, setVehicleInstruction] = useState(null);
  const [groupType, setGroupType] = useState(null);

  useEffect(() => {
    const { getVehicleFile } = props;
    const { vehicleData } = props;

    getVehicleFile(vehicleData.id);
  }, []);

  const handleModal = (value, groupType) => {
    setImageCategory(value.id);
    setGroupType(groupType);
    setVehicleInstruction(value);
    setModalValue(!isModalVisible);
  };

  const handleModalClose = () => {
    setModalValue(false);
  };

  const handleImageUpload = (event) => {
    var imageFile = event.target.files[0];
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

  return (
    <VehicleInspectionScreen
      vehicleInstructionValues={vehicleInstructionValues}
      vehicleInstructions={props.vehicleInstructions}
      isModalVisible={isModalVisible}
      isSurveyModalVisible={isSurveyModalVisible}
      isLoading={props.isLoading}
      handleImageUpload={handleImageUpload}
      handleModal={handleModal}
      handleModalClose={handleModalClose}
      handleVideoUpload={handleVideoUpload}
      handleSurveyModal={handleSurveyModal}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInspectionContainer);
