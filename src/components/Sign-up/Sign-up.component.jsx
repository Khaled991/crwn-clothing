import React, { Component } from 'react';
import FormInput from '../form-input/Form-input.component';
import CustomButton from '../custom-button/Custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './Sign-up.style.scss';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const inputsData = [
      {
        type: 'text',
        name: 'displayName',
        value: displayName,
        label: 'Display Name',
      },
      {
        type: 'email',
        name: 'email',
        value: email,
        label: 'Email',
      },
      {
        type: 'password',
        name: 'password',
        value: password,
        label: 'Password',
      },
      {
        type: 'password',
        name: 'confirmPassword',
        value: confirmPassword,
        label: 'Confirm Password',
      },
    ];
    return (
      <div className="sign-up">
        <h2 className="title">I do have a account</h2>
        <span>sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          {inputsData.map(({ ...props }, i) => (
            <FormInput
              key={i}
              onChange={this.handleChange}
              {...props}
              required
            />
          ))}
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
