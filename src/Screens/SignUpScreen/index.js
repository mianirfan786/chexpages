import React from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  //  Tooltip
} from 'antd';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdCancel } from 'react-icons/md';

import { PrivacyModal } from '../../Components';

import './style.css';
import '../../App.css';

const SignUpScreen = ({ dropDown, handleSubmit, isLoading, companies, handleCheckBox, showModal, handleModal, handleDropDown }) => {
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
                <Form.Item style={{ position: 'relative' }} name="companies" rules={[{ required: true, message: 'Please select company(s)' }]}>
                  <Select
                    open={dropDown}
                    onDropdownVisibleChange={handleDropDown}
                    dropdownRender={(menu) => (
                      <div>
                        <div style={{ margin: '13px 5px 13px 5px' }} className="registration-warn-message">
                          +$9.99 for each additional company selection.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                          <div onClick={handleDropDown}>
                            <MdCancel size={25} />
                          </div>
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
                  {/* <div className="tool-tip">
                    <Tooltip placement="topLeft" title="+$9.99 for each additional company selection">
                      <BsInfoCircle size={20} color="gray" />
                    </Tooltip>
                  </div> */}
                </Form.Item>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                  <div>
                    {/* <Tooltip placement="topLeft" title="+$9.99 for each additional company selection">
                      <BsInfoCircle size={20} color="white" />
                    </Tooltip> */}
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
      <PrivacyModal showModal={showModal} closeModal={handleModal} />
    </div>
  );
};

export default SignUpScreen;
