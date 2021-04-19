import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  background: linear-gradient(0deg, rgba(27, 104, 179, 0.6) 0%, #1b68b3 99.97%), url(/images/bg_img.jpg);
  width: 100%;
  height: 100vh;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const ImageBackgroundSignin = styled.div`
  position: relative;
  height: 100vh;
`;

export const MainBgSignin = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

export const ContentMainScreen = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const ContentMainScreenh5 = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #74b3fb;
  text-align: center;
  padding-top: 21px;
  padding-bottom: 30px;
  margin: 0px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const MainScreenP = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  margin: 0px;
`;

export const ArrowBack = styled.span`
  color: #fff;

  a {
    color: #fff;
  }
`;

export const LogoSpanColor = styled.span`
  color: #ff9900;
`;

export const ContentFooterAreaSignin = styled.div`
  text-align: center;
`;

export const LoginPageH1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 86px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  padding-bottom: 0px;
  margin: 0px;
`;

export const SigninHeadingH3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`;

export const LinkSignInBtn = styled.button`
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

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const NextLink = styled(Link)`
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

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const LogoutButton = styled.div`
  position: absolute;
  color: #ffffff;
  text-decoration: none;
  right: 14px;
  cursor: pointer;
  top: 33px;
`;

export const SigninWithGoogle = styled(Link)`
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: none;
  padding: 16px 62px;

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const MtB5 = styled.div`
  margin-bottom: 22px;
`;

export const InputSigninPage = styled.div`
  margin-bottom: 30px;
`;

export const InputField = styled.input`
  background: #e7eef5;
  border: 1px solid #e7eff8;
  box-sizing: border-box;
  border-radius: 3px;
  width: 90%;
  margin: 0 auto 20px;
  padding: 20px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #889bad;
`;

export const ArrowBackA = styled(Link)`
  color: #fff;
`;

export const SigninHeadingH3Span = styled.span`
  width: 100%;
  font-size: 24px;
`;

export const VerifiMailText = styled.div`
  color: white;
`;

export const VerifiMailTextSpan = styled.p`
  color: #ff7a00;
  font-weight: bold;
  margin: 40px 0;
  font-size: 18px;
  line-height: 27px;
`;

export const ResendLink = styled.button`
  color: #ffffff;
  margin: 50px auto;
  padding: 10px 10px;
  display: block;
  align-items: center;
  text-align: center;
  border: 0px;
  width: 75%;
  background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
  border-radius: 50em;
  border: 1px solid #ff7400;
  padding: 14px 15px;
  text-decoration: none;

  :focus {
    outline: none;
    border: none;
  }
`;

export const VehicleInspectionArrowBack = styled.span`
  color: #2584e0;

  font-size: 14px;
`;

export const ContentVehicleInspectionH1 = styled.h1`
  margin: 0px;
  padding-top: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 25px;
  text-align: center;
  color: #1262b1;
`;

export const OpenNavSpan = styled.button`
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: 0;
  color: #ffffff;

  :focus {
    outline: none;
  }
`;

export const SigninHeadingHText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
`;

export const BackToLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: baseline !important;
`;

export const BackToLoginText = styled.p`
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  line-height: 27px;
  text-decoration: none;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  :a {
    color: #ffffff;
  }
`;

export const ArrowBackLogin = styled.div`
  padding-right: 10px;
`;

export const ArrowBackALogin = styled(Link)`
  font-size: 10px;
  color: #fff;

  a {
    color: #fff;
  }
`;
