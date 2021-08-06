/* eslint-disable */

import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import './style.css';
import '../../App.css';

const LoginScreen = ({ handleSubmit, isLoading }) => {
  return (
    <div className="login-main-container">
      <div className="login-image-background-signin">
        <div className="login-main-bg-signin">
          <div className="login-content-container">
            <h1 className="login-heading-logo">
              CHEX
              <span className="logo-span-color">.AI</span>
            </h1>
            <div className="login-desp-heading">Virtual Inspections</div>
            <div className="intro-validation-text">
              (Only valid for <span className="intro-state-name">CA</span> drivers)
            </div>
          </div>
          <div className="login-form-main-container">
            <h3 className="login-form-heading">Sign in</h3>
            <Form
              className="login-form-container"
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
            >
              <Form.Item
                name="email"
                type="email"
                className="form-item-style"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email!',
                    pattern: new RegExp(
                      /^\s*(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*\s*$/
                    ),
                  },
                ]}
              >
                <Input placeholder="Email" className="input-field" />
              </Form.Item>

              <Form.Item
                name="password"
                className="form-item-style"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              >
                <Input.Password style={{ border: 'none', fontFamily: 'Poppins' }} placeholder="Password" className="input-field" />
              </Form.Item>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -15, marginBottom: 10 }}>
                <Form.Item>
                  <Link to="/forgotpassword" className="forgot-password-link">
                    Forgot Password?
                  </Link>
                </Form.Item>
              </div>
              <Form.Item>
                <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                  {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Sign in'}
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/register" style={{ color: 'white', marginTop: '10px' }}>
                  Don't have an account? Register
                </Link>
              </Form.Item>
            </Form>
          </div>
          <div style={{ height: '100px' }} />
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
