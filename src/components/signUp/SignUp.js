import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/userAction';
import Input from '../input/Input';
import Button from '../button/Button';
import { SignUpContainer, Title, Subtitle } from './SignUp.style';

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <Subtitle>Sign up with your email and password</Subtitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
