import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Form, Button, Input } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';
import '../../App.css';

const ForgotPasswordScreen = ({ handleSubmit, isLoading }) => {
  return (
    <div className="signup-main-container">
      <div className="signup-imagebackground-signin">
        <div className="signup-mainbg-signin">
          <div className="signup-header-item">
            <span className="signuparrow-back">
              <Link to="/">
                <i className="fas fa-chevron-left fa-2x" />
              </Link>
            </span>

            <h1 className="signup-content-vehicle-inspection">Forgot password</h1>
          </div>
          <p className="signup-main-screen">Type email for password reset</p>

          <div className="signup-content-footer-area-signin">
            <Form
              className="form-container"
              // {...layout}
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
              <Form.Item>
                <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                  {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Submit'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
