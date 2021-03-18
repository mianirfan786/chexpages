import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsChevronLeft } from 'react-icons/bs';

import './style.css';
import '../../App.css';

const LoginScreen = ({ handleSubmit, isLoading }) => {
  return (
    <div className="login-main-container">
      <div className="login-image-background-signin">
        <div className="login-main-bg-signin">
          <div className="login-content-container">
            <h5 className="login-title-heading">
              <span className="login-back-arrow">
                <Link className="login-arrow-link" to="/">
                  <BsChevronLeft style={{ fontWeight: 'bold' }} size={40} />
                </Link>
              </span>
            </h5>
            <h1 className="login-heading-logo">
              CHEX
              <span className="logo-span-color">.AI</span>
            </h1>
            <div className="login-desp-heading">Virtual Inspections</div>
          </div>
          <div className="login-form-main-container">
            <h3 className="login-form-heading">Sign in</h3>
            <Form
              className="form-container"
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
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input className="input-field" />
              </Form.Item>

              <Form.Item
                name="password"
                className="form-item-style"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password className="input-field" />
              </Form.Item>
              <Form.Item>
                <Link to="/forgotpassword" className="forgot-password-link">
                  Forgot Password?
                </Link>
              </Form.Item>
              <Form.Item>
                <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                  {isLoading ? <ClipLoader color={'white'} size={20} /> : 'login'}
                </Button>
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
