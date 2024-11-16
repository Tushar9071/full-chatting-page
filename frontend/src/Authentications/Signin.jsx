// Login.js
import React, { useState } from 'react';
import '../styles/authentication.css';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import Loading from '../utils/Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Chexaylogo from '../Images/Chexay.io.png'
export default function Login() {
  const [input , setInput] = useState({
    username:'',
    password:''
  })


  const [inputType, setInputType] = useState("password"); // This controls whether the password is visible or not

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };


  const {loading,login} = useLogin();

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(input);
  }

  
  return (
    <div className="app-bg-container">
      <div className="glass-container">
         {/* Logo */}
         <img
          src={Chexaylogo}
          alt="Chexay"
          className="auth-logo"
        />
        <div className="auth-header">Welcome To Chexay</div>
         <p className="auth-subtitle" style={{ color: 'white' }}>Please login to your account</p>

        <div className="auth-text">Email or Username</div>
        <div className="input-container">
          <input
            className="auth-login"
            type="text"
            placeholder="Enter Email or Username"
            aria-label="Email or Username"
            value={input.username}
            onChange={(e) => setInput({ ...input, username: e.target.value })}
          />
        </div>

        <div className="auth-text">Password</div>
        <div className="input-container">
          <div className="input-wrapper">
            <input
              className="auth-login"
              type={inputType} // Make the password field's type dynamic
              placeholder="Enter Password"
              aria-label="Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <button type="button" className="show-password-btn" onClick={toggleInputType}>
              <FontAwesomeIcon icon={inputType === "password" ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>

        <div className="auth-checkbox">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        {/* <div className="auth-button"> */}
          {
            loading?(<Loading/>):<button className="otp-btn" id= "auth-btn" onClick={handleSubmit}>Login</button>
          }
        
        {/* </div> */}
        

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span className="divider">|</span>
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
