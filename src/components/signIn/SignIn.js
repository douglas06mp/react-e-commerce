import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.util';
import Input from '../input/Input';
import Button from '../button/Button';
import './SignIn.scss';

export default class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
        <h2 className="signIn--title">I already have an account</h2>
        <span className="signIn--subtitle">
          Sign in with your email and password
        </span>
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
          <div className="signIn--buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
