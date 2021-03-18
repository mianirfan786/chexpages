import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsChevronLeft } from 'react-icons/bs';
import {
  MainBgSignin,
  ContentMainScreen,
  ArrowBack,
  ContentFooterAreaSignin,
  SigninHeadingH3,
  LogoSpanColor,
  MainScreenP,
  ContentMainScreenh5,
  ArrowBackA,
  LoginPageH1,
} from './style.js';

import './style.css';
import '../../App.css';

const areas = [
  { label: 'Beijing', value: '1' },
  { label: 'Shanghai', value: '2' },
];
const SignUpScreen = ({ handleSubmit, isLoading }) => {
  return (
    <div className="register-main-container">
      {console.log(isLoading)}
      <div className="register-background-image">
        <MainBgSignin>
          <ContentMainScreen>
            <ContentMainScreenh5>
              <ArrowBack>
                <ArrowBackA to="/">
                  <BsChevronLeft size={40} />
                </ArrowBackA>
              </ArrowBack>
            </ContentMainScreenh5>
            <LoginPageH1>
              CHEX
              <LogoSpanColor>.AI</LogoSpanColor>
            </LoginPageH1>
            <MainScreenP>Virtual Inspections</MainScreenP>
          </ContentMainScreen>
          <ContentFooterAreaSignin>
            <SigninHeadingH3>Register</SigninHeadingH3>

            <div className="register-container">
              <Form
                className="form-container"
                // {...layout}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="name"
                  className="form-item-style"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your full name!',
                    },
                  ]}
                >
                  <Input className="input-field" placeholder="Full name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  type="email"
                  className="form-item-style"
                  rules={[
                    {
                      type: 'email',
                      required: true,
                      message: 'Please input valid email!',
                    },
                  ]}
                >
                  <Input className="input-field" placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  className="form-item-style"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter password!',
                    },
                  ]}
                >
                  <Input.Password className="input-field" placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  className="form-item-style"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter phone number!',
                    },
                  ]}
                >
                  <Input className="input-field" placeholder="Phone number" />
                </Form.Item>
                <Form.Item
                  name="license_plate_no"
                  className="form-item-style"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter license plate number!',
                    },
                  ]}
                >
                  <Input className="input-field" placeholder="License plate number" />
                </Form.Item>
                <Form.Item name="companies" rules={[{ required: true, message: 'Please select companies' }]}>
                  <Select placeholder="Select companies" mode="multiple" className="input-field" options={areas} />
                </Form.Item>
                <Form.Item>
                  <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                    {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Register'}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </ContentFooterAreaSignin>
        </MainBgSignin>
      </div>
    </div>
  );
};

export default SignUpScreen;
