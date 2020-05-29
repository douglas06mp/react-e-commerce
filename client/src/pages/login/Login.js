import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import { LoginContainer } from './Login.style';

const Login = () => {
  return (
    <LoginContainer>
      <SignIn />
      <SignUp />
    </LoginContainer>
  );
};

export default Login;
