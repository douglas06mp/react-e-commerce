import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userAction';
import Input from '../input/Input';
import Button from '../button/Button';
import { SignInContainer, Title, Subtitle, Buttons } from './SignIn.style';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const { email, password } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <Buttons>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignInStart} google>
            Sign in with google
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
