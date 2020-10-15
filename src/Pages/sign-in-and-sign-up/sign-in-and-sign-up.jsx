import React from 'react';
import './sign-in-and-sign-up.style.scss';
import SignIn from '../../components/Sign-in/Sign-in.component';
import SignUp from '../../components/Sign-up/Sign-up.component';

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
