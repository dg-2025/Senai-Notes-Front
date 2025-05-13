import React, { useState } from 'react';
import './login.css';
import logo from '../../assets/imgs/logowhite.png'; // ajuste o caminho se necessário

function Login() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");




  return (

    <> 

    <div className="login-box">
      <img src={logo} alt="Logo Senai Notes" className="logo" />
      <p className="subtitle">Welcome to Note</p>
      <p className="instruction">Please log in to continue</p>

      <form>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="email@example.com" required />

        <label htmlFor="password">
          Password <a href="#" className="forgot">Forgot</a>
        </label>
        <input type="password" id="password" required />

        <button type="submit">Login</button>
      </form>

      <p className="signup">
        No account yet? <a href="#">Sign Up</a>
      </p>
    </div>

    </>
  );
}

export default Login