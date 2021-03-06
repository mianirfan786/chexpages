import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const ButtonContainer = styled.div`
  background: linear-gradient(90deg, rgb(255, 122, 0) 0%, rgb(255, 153, 0) 94.74%);
  border-radius: 100px;
  border: 1px solid rgb(255, 116, 0);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 14px 15px;
  text-decoration: none;
  cursor: pointer;
  width: 80%;
  margin: 0px auto;

  @media screen and (min-width: 650px) {
    width: 70%;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Title = styled.div``;
