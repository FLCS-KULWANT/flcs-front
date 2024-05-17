// Login.js

import React, { useState } from 'react';
import './Login.css';
import loginimage from '../../assets/login-page.png'
import gplay from '../../assets/googleplaystore.png'
import iosplay from '../../assets/App_Store_(iOS).svg.png'
const Login = () => {
   const [showNameInput, setShowNameInput] = useState(false);
  const [submitState, setSubmitState] = useState('login'); // 'login' or 'signup'

  const handleSignupClick = () => {
    setShowNameInput(true);
    setSubmitState('signup');
  };
  return (
    <div className="login-container">
      <div className="login-pic">
        <img src={loginimage} alt='/loginimag'/>
      </div>
      <div className="login-form">
      <div className="login-title">{submitState === 'login' ? 'SIGN IN' : 'SIGN UP'}</div>
      {submitState === 'signup' && (
          <div className="login-name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" />
          </div>
        )}
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className="login-password">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Your password" />
        </div>

        <div className="signup-link">Don’t have an account? <span>SIGN UP</span></div>
        <div className="download-app">
          Download our App
          <div className="app-images">
            <img src={gplay} alt="Play Store" />
            <img src={iosplay} alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
