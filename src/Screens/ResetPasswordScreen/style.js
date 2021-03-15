import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../Assets/bg_img.png';
export const MainContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageBackgroundSignin = styled.div`
  position: relative;
  width: 100%;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;

  @media screen and (min-width: 768px) {
    .ImageBackgroundSignin {
      background-size: cover;
      background-position: center center;
    }
  }
`;

export const MainBgSignin = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const ContentMainScreen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 2000;
`;

export const ContentMainScreenh5 = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #74b3fb;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 30px;
`;

export const MainScreenP = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #4a93e9;
  text-align: center;
  margin: 40px auto;
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
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0 20px;
  height: 100vh;
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
  margin: 50px 0 0 0;
`;

export const SigninHeadingH3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
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
  padding: 15px;
  text-decoration: none;
  width: 90%;
  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const LinkSignInBtnStrip = styled.button`
  background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 15px 100px;
  text-decoration: none;
  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const NextLink = styled(Link)`
  color: white;
  font-size: 18px;
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
  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const MtB5 = styled.div`
  width: 90%;
  text-align: center;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputSigninPage = styled.div`
  margin-bottom: 0px;
  width: 100%;
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

export const ForgotPasswordText = styled.div`
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  text-decoration-line: underline;
  color: #6c8bb9;
  margin-top: -15px;
`;

export const PrivacyLabel = styled.label`
  align-self: flex-start;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #e7eef5;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 30px;
  margin-left: 20px;
  :focus {
    outline: none;
    background: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  :hover input ~ .checkmark {
    border-radius: 3px;
  }
  input:checked ~ .checkmark {
    background: #e7eef5;
    border-radius: 3px;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 6px;
    top: 1px;
    width: 8px;
    height: 13px;
    border: 1px solid #ff7c00;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .checkmark::before {
    left: 6px;
    top: 1px;
    width: 8px;
    height: 13px;
    border: 1px solid #a7b8c8;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckMark = styled.span`
  position: absolute;
  top: -2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e7eef5;
  border-radius: 3px;
  :before {
    content: '';
    position: absolute;
    border: 1px solid #a7b8c8;
  }
  :after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const TermsUsetext = styled(Link)`
  color: #e7eef5;
  font-size: 14px;
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const ContentVehicleInspectionH1 = styled.h1`
  margin: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  text-align: center;
  color: #ffffff;
  align-self: center;
  margin: 0 auto;
`;

// background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
// border-radius: 100px;
// border: 1px solid #ff7400;
// font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 27px;
// text-align: center;
// color: #ffffff;
// padding: 14px 104px 15px;
// text-decoration:none;

// :focus, :active {
//   outline: none;
//   box-shadow: 0 0 0 0 !important;
// }
