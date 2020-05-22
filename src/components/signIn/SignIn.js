import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import Input from '../input/Input';
import Button from '../button/Button';
import { SignInContainer, Title, Subtitle, Buttons } from './SignIn.style';

export default class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
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
            <Button type="button" onClick={signInWithGoogle} google>
              Sign in with google
            </Button>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}
