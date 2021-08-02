/* eslint-disable */

import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdCancel } from 'react-icons/md';

import { PrivacyModal } from '../../Components';

import './style.css';
import '../../App.css';

const SignUpScreen = ({ dropDown, handleSubmit, isLoading, handleCheckBox, showModal, handleModal, handleDropDown }) => {
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
            <div className="intro-validation-text">
              (Only valid for <span className="intro-state-name">CA</span> drivers)
            </div>
          </div>
          <div className="register-contentFooterAreaSignin">
            <div className="register-signinHeadingH3">Register</div>
            <div className="register-container">
              <Form
                style={{ position: 'relative' }}
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
                      required: true,
                      message: 'Please enter valid email!',
                      pattern: new RegExp(
                        /^\s*(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*\s*$/
                      ),
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
                      message: 'Please enter your password!',
                    },
                  ]}
                >
                  <Input.Password style={{ fontFamily: 'Poppins' }} className="input-field" placeholder="Password" />
                </Form.Item>
                {/* <Form.Item style={{ position: 'relative' }} name="companies" rules={[{ required: true, message: 'Please select company(s)' }]}>
                  <Select
                    open={dropDown}
                    onDropdownVisibleChange={handleDropDown}
                    dropdownRender={(menu) => (
                      <div>
                        <div style={{ margin: '13px 5px 13px 5px' }} className="registration-warn-message">
                          $24.99 for first inspection and +$14.99 for each additional company selection.{' '}
                          <span>
                            {' '}
                            <div onClick={handleDropDown}>
                              <MdCancel size={25} />
                            </div>
                          </span>
                        </div>
                        <div>{menu}</div>
                      </div>
                    )}
                    showSearch={false}
                    placeholder="Select company(s)"
                    mode="multiple"
                    className="input-field"
                    options={companies}
                  />
                </Form.Item> */}

                <div style={{ display: 'flex', marginBottom: 15 }}>
                  <div></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      <label class="newcontainer">
                        <input onChange={handleCheckBox} type="checkbox" />
                        <span class="newcheckmark"></span>
                      </label>
                      <div onClick={handleModal} className="register-checkbox-text">
                        I accept <span style={{ color: 'white', textDecoration: 'underline' }}>terms of use</span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>

                <Form.Item>
                  <Button disabled={isLoading ? true : false} className="button-wrapper" htmlType="submit">
                    {isLoading ? <ClipLoader color={'white'} size={20} /> : 'Register'}
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link to="/login" style={{ color: 'white' }}>
                    Already have an account. <span style={{ color: 'orange' }}>Signin!</span>
                  </Link>
                </Form.Item>
              </Form>
              <div style={{ height: '100px' }} />
            </div>
          </div>
        </div>
      </div>
      <PrivacyModal showModal={showModal} closeModal={handleModal} />
    </div>
  );
};

export default SignUpScreen;
