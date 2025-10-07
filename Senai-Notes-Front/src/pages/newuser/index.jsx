import React, { useState } from 'react';
import './newuser.css';
import logo from '../../assets/imgs/logowhite.png';
import infoIcon from '../../assets/imgs/info circle.png';

function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnNewUserClick = async () => {
    if (!nome || !email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/usuarios/cadastras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: password,
        }),
      });


      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "/login";
      } else {
        const errorText = await response.text();
        alert("Erro ao cadastrar usuário: " + errorText);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      alert("Erro de rede. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="global-root">
      <div className="newuser-root">
        <div className="login-box">
          <img src={logo} alt="Logo Senai Notes" className="logo" />
          <p className="subtitle">Create Your Account</p>
          <p className="instruction">
            Sign up to start organizing your notes and boost your productivity.
          </p>

          <form>
            <label htmlFor="nome">Full Name</label>
            <input
              className="nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              type="text"
              id="nome"
              placeholder="John Doe"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              className="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="email@example.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              className="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />

            <div className="note">
              <img src={infoIcon} alt="Info Icon" />
              <span>At least 8 characters</span>
            </div>

            <button className="submit" onClick={OnNewUserClick} type="button">Sign up</button>
          </form>

          <p className="login">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
