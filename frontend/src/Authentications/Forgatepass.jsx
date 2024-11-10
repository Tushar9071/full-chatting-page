import React, { useState } from 'react';  
import { useForm } from 'react-hook-form';
import '../styles/authentication.css';

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(Array(4).fill('')); 

  const handleOtpInput = (index, event) => {
    const { value } = event.target;
    if (/[^0-9]/.test(value)) return;  // Allow only numbers
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Move focus to the next OTP input
    if (index < 3 && value) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = () => {
    setShowOtp(true);
  };

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    // Here, you can add the logic to submit the form after OTP is verified
  };

  return (
    <div className="app-bg-container">
      <div className="glass-container">
        <div className="auth-header">Reset Password</div>

        <form onSubmit={handleSubmit(onSubmit)}>
    <div className="auth-text">Enter Email</div>
    <div className="input-container">
        <input
            className="auth-input"
            type="email"
            {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Invalid email address"
                }
            })}
            placeholder="Enter Email"
        />
        <button type="button" className="verify-email-btn" onClick={handleVerifyOtp}>
            Verify OTP
        </button>
    </div>
    {errors.email && <p className="error-message">{errors.email.message}</p>}
    
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
                    onChange={(e) => handleOtpInput(idx, e)}
                />
            ))}
        </div>
    )}

    <div className="auth-text">New Password</div>
    <div style={{ position: 'relative', width: '100%' }}>
        <input
            className="auth-input"
            type={showPassword ? 'text' : 'password'}
            {...register("password", {
                required: "Password is required",
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                }
            })}
            placeholder="New Password"
        />
        <button type="button" className="show-password-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
        </button>
    </div>
    {errors.password && <p className="error-message">{errors.password.message}</p>}

    <button type="submit" className="auth-button">Reset Password</button>
</form>

        <div className="auth-links">
          <a href="/login">Back to Login</a>
          <span className="divider">|</span>
          <a href="/signup">Create Account</a>
        </div>
      </div>
    </div>
  );
}
