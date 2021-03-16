import React from 'react';
import { Form, Input, Button } from 'antd';

// import { Input, Button } from '../../Components';
import {
  MainContainer,
  ImageBackgroundSignin,
  MainBgSignin,
  ContentMainScreen,
  ArrowBack,
  ContentFooterAreaSignin,
  SigninHeadingH3,
  LogoSpanColor,
  MainScreenP,
  // InputSigninPage,
  ContentMainScreenh5,
  ArrowBackA,
  // MtB5,
  LoginPageH1,
  // ForgotPasswordText,
} from './style';

const LoginScreen = ({ handleSubmit }) => {
  return (
    <MainContainer>
      <ImageBackgroundSignin>
        <MainBgSignin>
          <ContentMainScreen>
            <ContentMainScreenh5>
              <ArrowBack>
                <ArrowBackA to="/">
                  <i className="fas fa-chevron-left fa-2x" />
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
            <SigninHeadingH3>Sign in</SigninHeadingH3>
            {/* <Form form={form} style={{ width: '100%' }}>
              <InputSigninPage>
                <Form.Item style={{ width: '100%' }}>
                  <Input rules={[{ required: true, message: 'Please input your username!' }]} name="email" placeholder="Email" />
                </Form.Item>
                <Form.Item style={{ width: '100%' }}>
                  <Input name="password" type="password" placeholder="Password" />
                </Form.Item>
                <ForgotPasswordText to="/forgotPassword">Forgot password?</ForgotPasswordText>
              </InputSigninPage>
              <MtB5>
                <Form.Item>
                  <Button title="Sign in" />
                </Form.Item>
                {/* <LinkSignInBtn disabled={loading} type="submit">
                {loading ? <ClipLoader size={20} color="#1A60A6" loading={loading} /> : 'Sign in'}
              </LinkSignInBtn> */}
            {/* </MtB5>
            </Form> */}

            <Form
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
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </ContentFooterAreaSignin>
          <div style={{ height: '100px' }} />
        </MainBgSignin>
      </ImageBackgroundSignin>
    </MainContainer>
  );
};
export default LoginScreen;
