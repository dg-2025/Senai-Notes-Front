import React, { useState } from 'react';
import './newuser.css'; // Importa o CSS externo
import logo from '../../assets/imgs/logowhite.png';
import infoIcon from '../../assets/imgs/info circle.png'; // certifique-se do caminho correto

function SignUp() {  

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const  OnNewUserClick = async () => {

    if(name == "") {
        alert ("Preencha o nome do usuário.")
        return;
    }

    if(email == "") {
        alert ("Preencha o e-mail.")
        return;
    }

    if(password == "") {
        alert ("Preencha a senha.")
        return;
    }
    if (confirmpassword == "") {
        alert ("Preencha a confirmção de senha")
    }

    if (password != confirmpassword) {
        alert ("As senhas não conferem")
        return;
    }


}



  return (
    <div className="login-box">
      <img src={logo} alt="Logo Senai Notes" className="logo" />
      <p className="subtitle">Create Your Account</p>
      <p className="instruction">
        Sign up to start organizing your notes and boost your productivity.
      </p>

      <form>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="email@example.com" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />

        <div className="note">
          <img src={infoIcon} alt="Info Icon" />
          <span>At least 8 characters</span>
        </div>

        <button type="submit">Login</button>
      </form>

      <p className="login">
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
}

export default SignUp