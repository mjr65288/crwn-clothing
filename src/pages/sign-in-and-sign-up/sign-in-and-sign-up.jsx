import React from 'react';

import './sign-in-and-sign-up.scss';
import SignUp from './../../components/sign-up/sign-up';
import SigIn from './../../components/sign-in/sign-in';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
    <SigIn />
    <SignUp />
  </div>
  );
};

export default SignInAndSignUp;
