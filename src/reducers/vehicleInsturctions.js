import createReducer from '../store/createReducer';
import * as types from '../utils/constants';

const initialState = {
  verificationItem: [
    {
      id: 'registration_card',
      type: 'Photo',
      title: 'Registration Card',
      description: '',
      url: '',
      fileId: null,
      groupType: 'carVerificiationItems',
      steps: ['Please upload a photo of a valid registration card clearly showing the car VIN number, car details, vehicle license plate.'],
      image: '/images/Photo1Exterior Left.png',
      // video: '/images/Clip 1 - Front.mov',
      loading: false,
    },
    {
      id: 'odometer',
      type: 'Photo',
      title: 'Odometer',
      description: '',
      url: '',
      groupType: 'carVerificiationItems',
      fileId: null,
      steps: ['Please take a photo of the entire odometer dashboard area with the vehicle turned on.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590296/chex-instruction/Photo-5Odometer_jxwevq.jpg',
      loading: false,
    },
  ],
  interiorItems: [
    {
      id: 'horn',
      type: 'Video',
      title: 'Horn',
      url: '',
      fileId: null,
      description: '',
      groupType: 'interiorItems',
      steps: ['Please record a 3 second video clip of honking horn with a clear sound.'],
      // image: '/images/Photo1Exterior Left.png',
      video: '/images/Clip 1 - Front.mov',
      loading: false,
    },
    {
      id: 'interior_driverside',
      type: 'Photo',
      title: 'Interior Driver Side',
      description: '',
      groupType: 'interiorItems',
      url: '',
      fileId: null,
      steps: ['Please take a photo of the interior of the vehicle with the left driver side door open with a clear view of the interior rearview mirror and brake pads.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590293/chex-instruction/interior_view_xxlp7t.jpg',
      // video: '/images/Clip 2 - Rear.mov',
      loading: false,
    },
    {
      id: 'driver_seat_adjusted',
      type: 'Photo',
      title: 'Driver Seat Adjusted',
      groupType: 'interiorItems',
      url: '',
      fileId: null,
      description: '',
      steps: ['Please take a photo of the driver seat pulled forward and back rest folded to maximum limit.'],
      video: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1616590304/chex-instruction/Clip_3_-_Driverside-1-720P_oawdex.mp4',
      loading: false,
    },
    {
      id: 'interior_passengerside',
      type: 'Photo',
      title: 'Interior Passenger Side',
      groupType: 'interiorItems',
      description: '',
      url: '',
      fileId: null,
      steps: ['Please take a photo of the interior of the vehicle with the right passenger side door open with a clear view of the inside.'],
      video: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1616590300/chex-instruction/Clip_4_-_Passengerside-1-720P_mdtjgp.mp4',
      loading: false,
    },
    {
      id: 'passenger_seat_adjusted',
      type: 'Photo',
      title: 'Passenger seat Adjusted',
      groupType: 'interiorItems',
      description: '',
      url: '',
      fileId: null,
      steps: ['Please take a photo of the passenger seat pulled forward and back rest folded to maximum limit. '],
      video: 'https://res.cloudinary.com/tech-qalanders/video/upload/v1616590300/chex-instruction/Clip_4_-_Passengerside-1-720P_mdtjgp.mp4',
      loading: false,
    },
    {
      id: 'interior_backseat',
      type: 'Photo',
      title: 'Interior Backseat',
      description: '',
      url: '',
      fileId: null,
      groupType: 'interiorItems',
      steps: ['Please take a photo entire odometer dashboard area with vehicle turned on.'],
      image: 'Please take a photo of the backseats with back doors opened and seat belts buckled.',
      loading: false,
    },
  ],
  exteriorItems: [
    {
      id: 'exterior_left',
      type: 'Photo',
      title: 'Exterior Left',
      description: '',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: ['Please take a photo from the center position of the left side (driver) of your vehicle capturing the entire exterior left side of your vehicle.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590293/chex-instruction/exteriorLeft_ggc7k8.jpg',
      loading: false,
    },
    {
      id: 'exterior_right',
      type: 'Photo',
      title: 'Exterior Right',
      description: '',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: ['Please take a photo from the center position of the right side (Passenger) of your vehicle capturing the entire exterior right side of your vehicle.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590294/chex-instruction/exteriorRight_frhvbt.jpg',
      loading: false,
    },
    {
      id: 'exterior_front',
      type: 'Video',
      title: 'Exterior Front',
      description: '',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: ['Please record a short 5 second video clip clearly showing the front of the vehicle with all the headlights, indicators and windshield wiper turned on.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590292/chex-instruction/ExteriorFront_ebdjvl.jpg',
      loading: false,
    },
    {
      id: 'exterior_rear',
      type: 'Video',
      title: 'Exterior Rear',
      description: '',
      url: '',
      fileId: null,
      groupType: 'exteriorItems',
      steps: [
        'Set the phone down behind the car (or have someone hold the phone with the car in field of view); once the camera is positioned well, drive the car 3-5 feet in reverse and push on the brake pedal. Once the car is in the park mode, push the gas pedal. Please ensure that the sound is clear(for checking muffler and for brake sound) and the brake light is in the clear view',
      ],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590295/chex-instruction/ExteriorRear_qz6qww.jpg',
      loading: false,
    },
  ],
  tires: [
    {
      id: 'left_front_tire',
      type: 'Photo',
      title: 'Left Front Tire',
      description: '',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Please place a penny on the tire tread with heads on the penny upside down and facing the camera and take a picture.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
    {
      id: 'left_rear_tire',
      type: 'Photo',
      title: 'Left Rear Tire',
      description: '',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Please place a penny on the tire tread with heads on the penny upside down and facing the camera and take a picture.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
    {
      id: 'right_front_tire',
      type: 'Photo',
      title: 'Right Front Tire',
      description: '',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Please place a penny on the tire tread with heads on the penny upside down and facing the camera and take a picture.'],
      image: 'https://res.cloudinary.com/tech-qalanders/image/upload/v1616590298/chex-instruction/Photot710Tire_xtabgg.jpg',
      loading: false,
    },
    {
      id: 'right_rear_tire',
      type: 'Photo',
      title: 'Right Rear Tire',
      description: '',
      url: '',
      fileId: null,
      groupType: 'tires',
      steps: ['Please place a penny on the tire tread with heads on the penny upside down and facing the camera and take a picture.'],
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
});
export default vehicleInsturctionsReducer;
