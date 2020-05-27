import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userAction';
import Input from '../input/Input';
import Button from '../button/Button';
import { SignInContainer, Title, Subtitle, Buttons } from './SignIn.style';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <Subtitle>Sign in with your email and password</Subtitle>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
