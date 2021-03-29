import styled from 'styled-components';

export const MainContainer = styled.div``;

export const ModalBody = styled.div`
  text-align: center;
`;

export const ModalHeading = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  width: 50%;

  color: #2a2a2a;
`;

export const InSideBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalDescription = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 21px;
  text-align: center;
  color: #2a2a2a;
  width: 50%;
`;

export const MtB5 = styled.div`
  margin-top: 52px;
  width: 100%;
`;

export const LinkSignInBtn = styled.button`
  background: linear-gradient(90deg, #ff7a00 0%, #ff9900 94.74%);
  border-radius: 50em;
  border: 1px solid #ff7400;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  padding: 12.5px 15px;
  text-decoration: none;
  width: 100%;

  :focus,
  :active {
    outline: none;
    box-shadow: 0 0 0 0 !important;
  }
`;
