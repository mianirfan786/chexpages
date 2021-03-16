import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';
import '../../App.css';

const LoginScreen = ({ handleSubmit }) => {
  return (
    <div className="login-main-container">
      <div className="login-image-background-signin">
        <div className="login-main-bg-signin">
          <div className="login-content-container">
            <h5 className="login-title-heading">
              <span className="login-back-arrow">
                <Link className="login-arrow-link" to="/">
                  <i className="fas fa-chevron-left fa-2x" />
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
              // {...layout}
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
              // onFinishFailed={onFinishFailed}
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
                <Button className="button-wrapper" htmlType="submit">
                  Submit
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
