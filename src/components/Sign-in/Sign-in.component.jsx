import React, { Component } from 'react';
import './Sign-in.style.scss';
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIN extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { Email, Password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(Email, Password);
      this.setState({ Email: '', Password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  render() {
    const inputsData = [{ label: 'Email' }, { label: 'Password' }];
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="">Sign iN with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          {inputsData.map(({ label, ...props }, i) => (
            <FormInput
              key={i}
              name={label}
              type={label}
              handleChange={this.handleChange}
              value={this.state[label]}
              label={label}
              {...props}
              required
            />
          ))}
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
