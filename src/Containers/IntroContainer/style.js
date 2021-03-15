import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../../Assets/bg_img.jpg';
// import { Link } from 'react-router-dom';

export const MainIntroContainer = styled.div``;



export const MainContainer = styled.div`
  width: 100%;
`;
export const ImageBackgroundMain = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  @media screen and (min-width: 768px) {
    .ImageBackgroundMain {
      background-size: cover;
      background-position: center center;
    }
  }
`;
export const MainBg = styled.div`
  background: linear-gradient(0deg, rgba(27, 104, 179, 0) 50%, #1b68b3 99.97%); 
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ContentMainScreen = styled.div`
  width: 100%;
`;
export const HeadingH5 = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #74b3fb;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0px;
`;
export const HeadingH1 = styled.h1`
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
export const ContentFooterarea = styled.div`
  position: absolute;
  bottom: 9%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SigninBtn = styled(Link)`
  background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
  border-radius: 100px;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 14px 60px 15px;
  text-decoration: none;
  width: 30%;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
export const ContentDivButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;
export const SignUpWithEmail = styled(Link)`
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
  padding: 16px 52px;
  text-decoration: none;
  width: 30%;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;
export const MtB5 = styled.div`
  // margin-bottom: 42px;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeadingSpan = styled.span`
  color: #ff9900;
`;
export const ContentP = styled.p`
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
/** Old css start */
export const CompanyItemDiv = styled.div`
  margin-bottom: 80px;
  display: inline-block;
`;
export const LogoDiv = styled.div`
  display: inline-block;
  margin-bottom: 58px;
`;
export const MenuDiv = styled.div`
  margin-bottom: 53px;
`;
export const MenuLI = styled.li`
  margin-bottom: 24px;
  display: block;
`;
export const MenuLILink = styled(Link)`
  text-decoration: none;
  color: #2699fb;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`;
export const MenuUL = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
`;
export const SmartPhoneDiv = styled.div`
  position: relative;
  display: table;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100vh;
`;
export const WelcomeDiv = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const WelcomeDivH1 = styled.h1`
  color: #e2d4d4e0;
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 56px;
  font-family: 'Conv_Georgia Regular font';
`;
export const WelcomeDivH2 = styled.h2`
  color: #e2d4d4e0;
  font-size: 20px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
`