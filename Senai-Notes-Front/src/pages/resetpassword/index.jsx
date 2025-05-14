import React, { useState } from 'react';
import logo from '../../assets/imgs/logowhite.png';
import '../../assets/styles/global.css';
import infoIcon from '../../assets/imgs/info circle.png'; 
function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container">
      <img src={logo} alt="Senai Notes Logo" className="logo" />
      <h2 className="subtitle">Reset Your Password</h2>
      <p className="instruction">Choose a new password to secure your account.</p>

      <form>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
        />
        <div className="note">
             <img src={infoIcon} alt="Info Icon" />
          <span> At least 8 characters</span>
        </div>

        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input
          type="password"
          id="confirmPassword"
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
