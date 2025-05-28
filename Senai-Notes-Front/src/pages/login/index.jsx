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
        let data;
        try {
          data = await response.json();
        } catch {
          alert("Resposta inválida do servidor.");
          return;
        }

        const token = data?.token;
        const userId = data?.cliente?.userId;

        if (token && userId) {

          console.log("meuToken" + token)

          localStorage.setItem("meuToken", token);
          localStorage.setItem("meuId", userId);
          alert("Login realizado com sucesso!");
          window.location.href = "/TelaNotas";
        } else {
          alert("Login OK, mas dados do usuário não foram retornados corretamente.");
        }

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
          <p className="subtitle">Bem-vindo ao Note</p>
          <p className="instruction">Por favor, faça login para continuar</p>

          <form>
            <label htmlFor="email">Endereço de email</label>
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
              Senha <a href="/forgotpassword" className="forgot">Esqueceu</a>
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
              Conecte-se
            </button>
          </form>

          <p className="signup">
            Ainda não tem conta? <a href="/signup">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
