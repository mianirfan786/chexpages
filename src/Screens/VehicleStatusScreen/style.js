import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  background: linear-gradient(0deg, rgba(27, 104, 179, 0.6) 0%, #1b68b3 99.97%);
  position: absolute;
  height: 100%;
  width: 100%;
  border: none;
  background-repeat: no-repeat;
`;

export const MainDownContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  // background: #1b68b3;
  // background: linear-gradient(0deg, rgba(27, 104, 179, 0.6) 0%, #1b68b3 99.97%);
  // background: 'linear-gradient(0deg, rgba(27, 104, 179, 0.6) 0%, #1b68b3 99.97%)';
  background-repeat: no-repeat;
  width: 100%;

  background-position: center top;

  @media screen and (max-width: 700px) {
    background: none;
    margin-top: 0px;
    width: 100%;
  }
`;

export const ImageBackgroundVehicleInspection = styled.div`
  background: linear-gradient(0deg, #f0f2f6, #f0f2f6), linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(180deg, #ffffff 0%, #181c1f 0.01%, #121417 100%);
  height: auto;
  border: none;
  background-repeat: no-repeat;
  @media screen and (max-width: 700px) {
    background: none;
    margin-top: 0px;
    width: 100%;
    height: auto;
  }
`;

export const ContentVehicleInspectionH1 = styled.h1`
  margin: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;

export const ContentVehicleInspectionH1Span = styled.span`
  color: #ff9900;
`;

export const VehicleInspectionArrowBack = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

export const ContentVehicleInspection = styled.div`
  width: 100%;
`;

export const VehicleInspectionA = styled(Link)`
  color: #2584e0;
`;

export const VehicleInspectionP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0em;
  color: #77a1df;
  margin: 0px auto;
  width: 75%;
`;

export const RowContentVehicleInspection = styled.div`
  padding: 0px 20px 60px 20px;
  text-align: center;
  a {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    div:first-child {
      width: 95%;
      text-align: left;
    }
  }
  div {
    width: 48%;
    :first-child {
      text-align: left;
    }
  }
`;

export const MidTickUploadDone = styled.div`
  text-align: center;
  margin: 0 auto;
  position: relative;
  img {
    width: 100%;
    height: 102px;
    border-radius: 5px;
    vertical-align: super;
  }
  i {
    width: 23px;
    height: 23px;
    background: #75ba5c;
    color: #fff;
    border-radius: 50%;
    padding: 5px 2px 5px;
    text-align: center;
    display: block;
    font-size: 11px;
    position: absolute;
    bottom: -13px;
    left: 50%;
    transform: translate(-50%, -50%);
    /* vertical-align: top; */
  }
`;

export const ColAreaVehicleInspection = styled.div`
  background: #c9d4e4;
  border-radius: 5px;
  width: 97%;
  height: 150px;
  padding-top: 0px;
  display: inline-block;
  margin-bottom: 75px;
  vertical-align: top;

  .div .ant-modal-footer{
    display: none !important;
  }

  .div .ant-modal-header{
    display: none !important;
  }

  .div .ant-modal-body{
    padding: 5px;
  }

  .div .ant-modal-close-x{
    color: #ffffff;
  }

  .div .ant-modal-mask{
    rgba(0, 0, 0, 1);
  }

  &:nth-child(odd) {
    margin-right: 10px;
  }
  @media screen and (min-width: 639px) {
    .ColAreaVehicleInspection {
      width: 48%;
    }
  }
  @media screen and (max-width: 339px) {
    .ColAreaVehicleInspection {
      width: 45%;
    }
  }
`;

export const CaptureImages = styled.span``;

export const ColCameraVehicleInspection = styled.div`
  position: relative;
  width: 20px;
  height: 17px;
  left: 10px;
  top: 10px;
`;

export const MidDownloadIconVehicleInspection = styled.div`
  width: 90px !important;
  height: 90px;
  background: #ffffff;
  margin: 10px auto 40px;
  border-radius: 50%;
  padding: 17px 0;
  text-align: center;
  div {
    text-align: center;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MidDownloadIconVehicleInspectionUpdate = styled.div`
  margin: 0 auto 0px;
  border-radius: 50%;
  padding: 0px 0;
  text-align: center;
  width: 100% !important;
  div {
    text-align: center;
  }
  img {
    width: 100%;
    height: 152px;
    border-radius: 5px;
    vertical-align: super;
  }
  video {
    border-radius: 5px;
    height: 150px;
  }
`;

export const CrossVideoIcon = styled.div`
  position: absolute;
  width: 0 !important;
  right: 25px;
  // bottom: -2px;
  font-weight: bold;
  color: #d07575;
  cursor: pointer;
  font-size: 18px;
`;

export const Content1DownloadVehicleInspection = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin: 0 auto;
  font-weight: 600;
  width: 150px !important;
`;

export const Content2DownloadVehicleInspection = styled.div`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #1262b1;
  margin-bottom: 10px;
  margin: 0 auto;
`;

export const MtB5VehicleInspection = styled.div`
  position: fixed;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CrossIcon = styled.div`
  position: absolute;
  width: 0 !important;
  right: 18px;
  top: 5px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const ImageContainer = styled.span`
  position: relative;
`;

export const VehicleinsBtnVehicleInspection = styled(Link)`
  background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 14px 104px 15px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const MidDownloadUploadVehicleInspection = styled.img`
  width: 100%;
  height: 102px;
  border-radius: 5px;
  vertical-align: super;
`;

export const ColCameraUploadVehicleInspection = styled.img`
  position: absolute;
  top: 48px;
  left: 67px;
`;

export const ColAreaUploadVehicleInspection = styled.div`
  background: none;
`;

export const MidTickUploadDoneVehicleInspection = styled.div`
  text-align: center;
  margin: 0 auto;
  position: relative;
`;

export const VehicalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const VehicalDetailButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const UploadIVehicleInspection = styled.i`
  width: 15px;
  height: 15px;
  background: #75ba5c;
  color: #fff;
  border-radius: 50%;
  padding: 5px 4px 3px;
  text-align: center;
  margin: -25px auto 0px;
  display: block;
  z-index: 999;
  font-size: 11px;
`;

export const ContentFooterareaVehicleinspection = styled.div`
  width: 100%;
  background: #e5e5e5;
  border-radius: 20px 20px 20px 20px;
  margin-top: 30px;
  padding: 30px 10px;
  margin-top: 30px;
  width: 30%;
  margin-bottom: 30px;
  // height: 100vh;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const OpenNavSpan = styled.button`
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: 0;
  color: #ffffff;
`;

export const VehicleDetailBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LinkSignInBtn1 = styled.span`
  background: #ff7a00;
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
  color: #ffffff;
  padding: 14px 104px 20px;
  text-decoration: none;

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const LinkSignInBtnDisable = styled.span`
  background: rgb(147 147 146);
  border-radius: 100px;
  border: 1px solid rgb(156 152 149 / 46%);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 14px 104px 20px;
  text-decoration: none;
  pointer-events: none;
`;

export const LinkSignInBtn = styled(Link)`
  background: #ff7a00;
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 14px 104px 20px;
  text-decoration: none;

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const LinkBtn = styled.div`
  background: #ff7a00;
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 14px 104px 20px;
  text-decoration: none;

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const HeaderItem = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // padding: 10px;
`;

export const ArrowBackA = styled.div`
  color: #ffffff;
`;

export const MainBgInsertDetails = styled.div`
  background: linear-gradient(0deg, rgba(27, 104, 179, 0.6) 0%, #1b68b3 99.97%);
  position: relative;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
`;

export const VehicleAfterCamera = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px !important;
  width: 30px !important;
`;

export const ImageBackgroundInspection = styled.img`
  border-radius: 5px;
  position: relative;
}
`;

export const VehicleAfterVideo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 27px !important;
  width: 24px !important;
`;

export const VideoMainContainer = styled.div`
  height: 100% !important;
  width: 100% !important;
  position: relative !important;
`;

export const VideoTag = styled.video`
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
`;
export const MobileViewWarningContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #c84a03;
  border-radius: 6px;
  margin-top: 10px;
`;

export const MobileViewWarning = styled.div`
  text-align: center;
  color: white;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  padding: 2px;
`;

export const BoldSpan = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`;
