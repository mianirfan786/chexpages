import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../App.css';

const ResetPassword = ({ handleSubmit, isLoading }) => {
  return (
    <div className="reset-main-container">
      <div className="reset-image-background-signin">
        <div className="reset-main-bg-signin">
          <div className="reset-header-item">
            <span className="reset-arrow-back">
              <Link to="/">
                <i className="fas fa-chevron-left fa-2x" />
              </Link>
            </span>
            <h1 className="reset-content-vehicle-inspection">Forgot password</h1>
          </div>
          <p className="reset-main-screen">Please check your email for unique pin and type below</p>
          <div className="reset-content-footer-area-signin">
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
                name="OTP"
                className="form-item-style"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your code!',
                  },
                ]}
              >
                <Input className="input-field" placeholder="Verification code" />
              </Form.Item>
              <Form.Item
                name="password"
                className="form-item-style"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your new password!',
                  },
                ]}
              >
                <Input.Password style={{ border: 'none', fontFamily: 'Poppins' }} className="input-field" placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                className="form-item-style"
                rules={[
                  {
                    required: true,
                    message: 'Please re-enter your new password!',
                  },
                ]}
              >
                <Input.Password style={{ border: 'none', fontFamily: 'Poppins' }} className="input-field" placeholder="Confirm password" />
              </Form.Item>
              <Form.Item>
                <Button className="button-wrapper" htmlType="submit">
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

export default ResetPassword;
