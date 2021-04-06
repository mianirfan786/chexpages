import React from 'react';
import { Form, Input, Button, Select, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsInfoCircle } from 'react-icons/bs';

import './style.css';
import '../../App.css';

const SignUpScreen = ({ handleSubmit, isLoading, companies, handleCheckBox }) => {
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
                      message: 'Please enter your full name!',
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
                      message: 'Please enter valid email!',
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

                {/* <Form.Item
                  name="password"
                  className="form-item-style"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter password!',
                    },
                  ]}
                >
                  <Input.Password style={{ border: 'none' }} className="input-field" placeholder="Password" />
                </Form.Item> */}

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
                  <Input.Password style={{ fontFamily: 'Poppins' }} className="input-field" placeholder="Password" />
                </Form.Item>
                <div className="warn-message-wrapper">{/* <div className="registration-warn-message">+$9.99 for each additional company selection.</div> */}</div>
                <Form.Item name="companies" rules={[{ required: true, message: 'Please select companies' }]}>
                  <Select showSearch={false} placeholder="Companies" mode="multiple" className="input-field" options={companies} />
                </Form.Item>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      <label class="newcontainer">
                        <input onChange={handleCheckBox} type="checkbox" />
                        <span class="newcheckmark"></span>
                      </label>
                      <div className="register-checkbox-text">
                        I accept{' '}
                        <Link style={{ color: 'white', textDecoration: 'underline' }} to="/termsAndPolicy">
                          terms of use
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Tooltip placement="topLeft" title="+$9.99 for each additional company selection">
                      <BsInfoCircle size={20} color="white" />
                    </Tooltip>
                  </div>
                </div>

                <Form.Item>
                  <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                    {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Register'}
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link to="/login" style={{ color: 'white' }}>
                    Sign in to an account
                  </Link>
                </Form.Item>
              </Form>
              <div style={{ height: '100px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
