import React, { useState } from "react";
import '../styles/authentication.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useOtpSend from "../hooks/useOtpSend";
import Loading from "../utils/Loading";
import useSignUp from "../hooks/useSignUp";

export default function Signup() {
  const{otpLoading,otpSend}=useOtpSend()
  const{signupLoadin,signup} = useSignUp()
  const [inputType, setInputType] = useState("password");
  const [otp, setOtp] = useState(Array(4).fill("")); // Manage OTP input
  const [showOtp, setShowOtp] = useState(false); // Control OTP visibility
  const [input,setInput] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
    gender:"male"
  })

  const genOtp = async ()=>{
    otpSend({username:input.username, email:input.email})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    input.otp = otp.join(''); // Combine OTP input to form final OTP
    // Add your logic to validate and send data to the server
    signup(input)
  }

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numbers
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (index < 3 && value) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyClick = () => {
    setShowOtp(true);
    genOtp();
  };

  return (
    <div className="app-bg-container">
      <div className="glass-container">
        <div className="auth-header">Signup</div>

        <form onSubmit={handleSubmit}>
          <div className="auth-text">Username</div>
          <div className="input-container">
            <input
              className="auth-input"
              type="text"
              placeholder="Enter your username"
              value={input.username}
              onChange={(e) =>
                setInput({...input, username: e.target.value })
              }
            />
           
          </div>

          <div className="auth-text">Email</div>
<div className="input-container with-verify">
  <input
    className="auth-input email-input"
    type="email"
    placeholder="Enter your email"
    value={input.email}
    onChange={(e) =>
      setInput({...input, email: e.target.value })
    }
  />
  <div className="verify-email-btn">
    {
      otpLoading? (
        <Loading/>
      ):
      <button type="button" className={'otp-btn'} onClick={handleVerifyClick}>
      OTP
      </button>
    }
    
  </div>
  
  
</div>

          {showOtp && (
            <div className="otp-input-group">
              {otp.map((value, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  className="otp-input"
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleOtpChange(e, idx)}
                />
              ))}
            </div>
          )}

          <div className="auth-text">Password</div>
          <div className="input-container">
            <div className="input-wrapper">
              <input
                className="auth-input"
                type={inputType}
                value={input.password}
                placeholder="Enter your password"
                onChange={(e) =>
                  setInput({...input, password: e.target.value })
                }
              />
              <button type="button" className="show-password-btn" onClick={toggleInputType}>
                <FontAwesomeIcon icon={inputType === "password" ? faEye : faEyeSlash} />
              </button>
            </div>
            
          </div>
          <div className="auth-button">
            {signupLoadin?<Loading/>:<button type="submit" className="otp-btn">Signup</button>}
            </div>
        </form>

        <div className="auth-links">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
