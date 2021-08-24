import createReducer from '../store/createReducer';
import * as types from '../utils/constants';

const initialState = {
  verificationItem: [
    {
      id: 'registration_card',
      type: 'Photo',
      title: 'Registration Card',
      description: 'Please upload a photo of a valid registration card clearly showing the car VIN number, car details, vehicle license plate. ',
      url: '',
      fileId: null,
      groupType: 'carVerificiationItems',
      steps: [],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616833517/chex-instruction/Rectangle-137_mcgwgg.jpg',
      loading: false,
    },
    {
      id: 'odometer',
      type: 'Photo',
      title: 'Odometer',
      description: 'Please take a photo  entire odometer dashboard area with vehicle turned on capturing following items:',
      url: '',
      groupType: 'carVerificiationItems',
      fileId: null,
      steps: ['Vehicle mileage'],
      image: ' https://res.cloudinary.com/tech-qalanders/image/upload/v1616590296/chex-instruction/Photo-5Odometer_jxwevq.jpg',
      loading: false,
    },
    {
      id: 'verification_card',
      type: 'Photo',
      title: 'Drivers License Verification',
      description: 'Please upload a selfie holding the drivers license card. Please make sure that the ID number and the card expiration date are clearly visible.',
      url: '',
      fileId: null,
      groupType: 'carVerificiationItems',
      steps: [],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1620158291/chex-instruction/Group_44982_lnqvib.png',
      loading: false,
      lyft: true,
    },
  ],
  interiorItems: [
    {
      id: 'horn',
      type: 'Video',
      title: 'Horn',
      url: '',
      fileId: null,
      description: 'Please record a 3 second video clip of honking horn with a clear sound.',
      groupType: 'interiorItems',
      steps: [],
      video: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1616833287/chex-instruction/horn_y7giyp.mp4',
      loading: false,
    },
    {
      id: 'interior_driver_side',
      type: 'Photo',
      title: 'Interior Driver Side',
      description: 'Please take a photo of the interior of the vehicle with left driver side door open with clear view of the following items:',
      groupType: 'interiorItems',
      url: '',
      fileId: null,
      steps: ['Driver seat belt buckled', 'Interior rearview mirro', 'Brake pads'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590296/chex-instruction/Photo-3---Driverside-Interior_kwk0fc.jpg',
      loading: false,
    },
    {
      id: 'driver_seat',
      type: 'Photo',
      title: 'Driver Seat Adj.',
      groupType: 'interiorItems',
      url: '',
      fileId: null,
      description: 'Please take a photo of the driver seat pulled forward and back rest folded to maximum limit.',
      steps: [],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616861066/chex-instruction/Driver-Side_m7wg9t.jpg',
      loading: false,
    },
    {
      id: 'interior_passenger_side',
      type: 'Photo',
      title: 'Interior Passenger Side',
      groupType: 'interiorItems',
      description: 'Please take a photo of the interior of the vehicle with right passenger side door open with clear view of the following interior items:',
      url: '',
      fileId: null,
      steps: ['Passenger seat belt buckled'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616861398/chex-instruction/Photo4Passengerside_Interior_fs12se.png',
      loading: false,
    },
    {
      id: 'passenger_seat',
      type: 'Photo',
      title: 'Passenger seat Adj.',
      groupType: 'interiorItems',
      description: 'Please take a photo of the passenger seat pulled forward and back rest folded to maximum limit.',
      url: '',
      fileId: null,
      steps: [],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616861154/chex-instruction/Passenger-Side-Edited_ylng6x.jpg',
      loading: false,
    },
    {
      id: 'interior_backseat',
      type: 'Photo',
      title: 'Interior Backseat',
      description: 'Please take a photo of the backseats capturing following items:',
      url: '',
      fileId: null,
      groupType: 'interiorItems',
      steps: ['Back doors opened', 'Seat Belts buckled'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photo6Backseat_xp61vx.jpg',
      loading: false,
    },
  ],
  exteriorItems: [
    {
      id: 'exterior_left',
      type: 'Photo',
      title: 'Exterior Left',
      description: 'Please take a photo from the center position of the left side (driver) of your vehicle capturing the entire exterior left side of your vehicle',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: [],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590296/chex-instruction/Photo1Exterior-Left_hgbo3j.jpg',
      loading: false,
    },
    {
      id: 'exterior_right',
      type: 'Photo',
      title: 'Exterior Right',
      description: 'Please take a photo from the center position of the right side (Passenger) of your vehicle capturing the entire exterior right side of your vehicle',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: [],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590300/chex-instruction/Photo2Exterior-Right_gnkjyw.jpg',
      loading: false,
    },
    {
      id: 'exterior_front',
      type: 'Video',
      title: 'Exterior Front',
      description: 'Please record a short video clip showing front of the vehicle and capturing the following items:',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: [' Headlights turned on', 'Front indicators blinking', 'Windshield wipers turned on'],
      video: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1616590294/chex-instruction/Clip_1_-_Front-1-720P_nlyo1y.mp4',
      loading: false,
    },
    {
      id: 'exterior_rear',
      type: 'Video',
      title: 'Exterior Rear',
      description: 'Set phone down behind car (or have someone hold the phone with car in field of view); once camera is positioned well, please capture following items:',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: ['Tail Lights turned on', 'Back indicators blinking', 'Drive car 3-5 feet in reverse and push on the brake pedal', 'Once car is in the park mode, push the gas pedal'],
      video: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1626698102/chex-instruction/Image_from_iOS_ubyk8c.mov',
      video2: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1616590306/chex-instruction/Clip_2_-_Rear_a0eoqp.mp4',
      loading: false,
    },
  ],
  tires: [
    {
      id: 'left_front_tire',
      type: 'Photo',
      title: 'Left Front Tire',
      description: 'Please place a penny on the tire thread and take a photo capturing following items:',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Place Lincoln’s heads on the penny upside down and facing the camera'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
    {
      id: 'left_rear_tire',
      type: 'Photo',
      title: 'Left Rear Tire',
      description: 'Please place a penny on the tire thread and take a photo capturing following items:',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Place Lincoln’s heads on the penny upside down and facing the camera'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
    {
      id: 'right_front_tire',
      type: 'Photo',
      title: 'Right Front Tire',
      description: 'Please place a penny on the tire thread and take a photo capturing following items:',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Place Lincoln’s heads on the penny upside down and facing the camera'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
    {
      id: 'right_rear_tire',
      type: 'Photo',
      title: 'Right Rear Tire',
      description: 'Please place a penny on the tire thread and take a photo capturing following items:',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Place Lincoln’s heads on the penny upside down and facing the camera'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
  ],
  isVehicleLoading: false,
};
const vehicleInsturctionsReducer = createReducer(initialState, {
  [types.SET_CAR_VERIFICATION_ITEMS](state, action) {
    action?.carVerificationItem.forEach((x) => {
      var item = state.verificationItem.find((a) => a.id === x.category);
      if (item) {
        item.url = x.url;
        item.fileId = x.id;
      }
    });
    return {
      ...state,
    };
  },
  [types.SET_INTERIOR_ITEMS](state, action) {
    action?.interiorItems.forEach((x) => {
      var item = state.interiorItems.find((a) => a.id === x.category);
      if (item) {
        item.url = x.url;
        item.fileId = x.id;
      }
    });
    return {
      ...state,
    };
  },
  [types.SET_EXTERIOR_ITEMS](state, action) {
    action?.exteriorItems.forEach((x) => {
      var item = state.exteriorItems.find((a) => a.id === x.category);
      if (item) {
        item.url = x.url;
        item.fileId = x.id;
      }
    });
    return {
      ...state,
    };
  },
  [types.SET_TIRES](state, action) {
    action?.tires.forEach((x) => {
      var item = state.tires.find((a) => a.id === x.category);
      if (item) {
        item.url = x.url;
        item.fileId = x.id;
      }
    });
    return {
      ...state,
    };
  },
  [types.SET_DELETE_LOCAL_FILE](state, action) {
    var groupType = action.deleteFileData?.groupType;
    if (groupType === 'carVerificiationItems') {
      let item = state.verificationItem.find((a) => a.fileId === action.deleteFileData?.fileId);
      if (item) {
        item.url = '';
      }
    } else if (groupType === 'interiorItems') {
      let item = state.interiorItems.find((a) => a.fileId === action.deleteFileData?.fileId);
      if (item) {
        item.url = '';
      }
    } else if (groupType === 'exteriorItems') {
      let item = state.exteriorItems.find((a) => a.fileId === action.deleteFileData?.fileId);
      if (item) {
        item.url = '';
      }
    } else if (groupType === 'tires') {
      let item = state.tires.find((a) => a.fileId === action.deleteFileData?.fileId);
      if (item) {
        item.url = '';
      }
    }
    return {
      ...state,
    };
  },
  [types.IS_Vehicle_LOADING](state, action) {
    return {
      ...state,
      isVehicleLoading: action.isVehicleLoading,
    };
  },
  [types.SET_VEHICLE_STATUS](state, action) {
    return {
      ...state,
      vehicleStatus: action.vehicleStatus,
    };
  },
  [types.SET_CERTIFICATE_DATA](state, action) {
    return {
      ...state,
      vehicleCertificate: action.vehicleCertificate,
    };
  },
  [types.SET_UBER_CERTIFICATE_DATA](state, action) {
    return {
      ...state,
      uberVehicleCertificate: action.uberVehicleCertificate,
    };
  },
  [types.SET_LYFT_CERTIFICATE_DATA](state, action) {
    return {
      ...state,
      lyftVehicleCertificate: action.lyftVehicleCertificate,
    };
  },
  [types.SET_INSPECTION_BY_STATUS](state, action) {
    return {
      ...state,
      inspectionByStatus: action.inspectionByStatus,
    };
  },
  [types.SET_VEHICLE_DETAILS](state, action) {
    return {
      ...state,
      vehicleDetails: action.vehicleDetails,
    };
  },
  [types.SET_FILE_DETAILS](state, action) {
    return {
      ...state,
      fileDetails: action.fileDetails,
    };
  },
});
export default vehicleInsturctionsReducer;
