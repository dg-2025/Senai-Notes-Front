import React, { useState } from 'react';
import logo from '../../assets/imgs/logowhite.png';
import '../../assets/styles/global.css';
import '../forgotpasssword/style.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <img src={logo} alt="Senai Notes Logo" className="logo" />
      <h2 className="subtitle">Forgotten your password?</h2>
      <p className="instruction">
        Enter your email below, and we'll send you a link to reset it.
      </p>

      <form>
        <label htmlFor="email">Email Address</label>
        <input className="email"
          value={email}
          onChange={event => setEmail (event.target.value)}
          type="email"
          id="email"
          placeholder="email@example.com"
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
