import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
