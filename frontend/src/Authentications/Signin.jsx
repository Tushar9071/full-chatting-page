// Login.js
import React, { useState } from 'react';
import '../styles/authentication.css';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import Loading from '../utils/Loading';
export default function Login() {
  const [input , setInput] = useState({
    username:'',
    password:''
  })
  const {loading,login} = useLogin();

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(input);
  }

  
  return (
    <div className="app-bg-container">
      <div className="glass-container">
        <div className="auth-header">Welcome Back</div>
        <p className="auth-subtitle">Please login to your account</p>

        <div className="auth-text">Email or Username</div>
        <input
          className="auth-input"
          type="text"
          placeholder="Enter Email or Username"
          aria-label="Email or Username"
          value={input.username}
          onChange={(e)=>setInput({...input , username: e.target.value})}
        />

        <div className="auth-text">Password</div>
        <input
          className="auth-input"
          type="password"
          placeholder="Enter Password"
          aria-label="Password"
          value={input.password}
          onChange={(e)=>setInput({...input,password:e.target.value})}
        />

        <div className="auth-checkbox">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="auth-button">
          {
            loading?(<Loading/>):<button className="otp-btn" onClick={handleSubmit}>Login</button>
          }
        
        </div>
        

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span className="divider">|</span>
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
