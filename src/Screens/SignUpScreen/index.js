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

const SignUpScreen = ({ handleSubmit, isLoading, companies }) => {
  return (
    <div className="register-main-container">
      <div className="register-background-image">
        <div className="">
          <div className="register-contentMainScreen">
            <div className="register-loginPageH1">
              CHEX
              <span className="register-logoSpanColor">.AI</span>
            </div>
            <div className="register-mainScreenP">Virtual Inspections</div>
          </div>
          <div className="register-contentFooterAreaSignin">
            <div className="register-signinHeadingH3">Register</div>

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
                <Form.Item name="companies" rules={[{ required: true, message: 'Please select companies' }]}>
                  <Select placeholder="Select companies" mode="multiple" className="input-field" options={companies} />
                </Form.Item>
                <Form.Item>
                  <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                    {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Register'}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;