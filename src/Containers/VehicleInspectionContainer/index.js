import React, { useState } from 'react';
import { connect } from 'react-redux';
import imageCompression from 'browser-image-compression';
import { bindActionCreators } from 'redux';

import { VehicleInspectionScreen } from '../../Screens';
import ActionCreators from '../../actions';

const VehicleInspectionContainer = (props) => {
  const [isModalVisible, setModalValue] = useState(false);
  const [imageCategory, setImageCategory] = useState(null);

  const handleModal = (value) => {
    setImageCategory(value);
    setModalValue(!isModalVisible);
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
        console.log(compressedFile);
        const { uploadImage, currentUser } = props;
        uploadImage(compressedFile, { type: compressedFile.type }, currentUser.id, imageCategory);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return <VehicleInspectionScreen handleImageUpload={handleImageUpload} handleModal={handleModal} isModalVisible={isModalVisible} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log(state);
  return {
    currentUser: state.auth.currentUser,
    isLoading: state.auth.isAuthLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInspectionContainer);
