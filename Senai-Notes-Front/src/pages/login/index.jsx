import React, { useState } from 'react';
import './login.css';
import logo from '../../assets/imgs/logowhite.png';
import '../../assets/styles/global.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClick = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("https://apisenainotes404.azurewebsites.net/api/Usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          senha: password 
        })
      });

      if (response.ok) {
        const data = await response.json();

        // 🔒 Verifique a resposta da API e ajuste esses campos se necessário
        const token = data.token || "mockToken";
        const userId = data.userId || "mockUserId";

        // Salvar dados no localStorage
        localStorage.setItem("meuToken", token);
        localStorage.setItem("meuId", userId);

        alert("Login realizado com sucesso!");
        window.location.href = "/TelaNotas";
      } else if (response.status === 401) {
        alert("Credenciais incorretas.");
      } else {
        const errorText = await response.text();
        alert("Erro no login: " + errorText);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      alert("Erro de rede. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="global-root">
      <div className="login-root">
        <div className="login-box">
          <img src={logo} alt="Logo Senai Notes" className="logo" />
          <p className="subtitle">Welcome to Note</p>
          <p className="instruction">Please log in to continue</p>

          <form>
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

            <label htmlFor="password">
              Password <a href="/forgotpassword" className="forgot">Forgot</a>
            </label>
            <input
              className="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />

            <button className="submit" onClick={loginClick} type="button">
              Login
            </button>
          </form>

          <p className="signup">
            No account yet? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
