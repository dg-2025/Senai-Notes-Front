import React, { useState } from 'react';
import './login.css';
import logo from '../../assets/imgs/logowhite.png'; // ajuste o caminho se necessário
import '../../assets/styles/global.css'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginClick = async () => {

    let response = await fetch("https://apisenainotes404.azurewebsites.net/index.html", {

      headers: {
        "Content-Type": "application/json"

      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })

    })

    if (response.ok == true) {

      alert("Login Realizado Com Sucesso!"); 

      console.log(response);

      window.location.href = "/login";

    } else { 

      if (response.status == 401) {

        alert("Credenciais Incorretas.");

      } else {

        alert("Erro inesperado aconteceu.")

      }
    }
}




  return (

    <>
      <div className="global-root">
        <div className="login-root">
          <div className="login-box">
            <img src={logo} alt="Logo Senai Notes" className="logo" />
            <p className="subtitle">Welcome to Note</p>
            <p className="instruction">Please log in to continue</p>

            <form>
              <label htmlFor="email">Email Address</label>
              <input className="email" value={email} onChange={event => setEmail(event.target.value)} type="email" id="email" placeholder="email@example.com" required />

              <label htmlFor="password">
                Password <a href="/forgotpassword" className="forgot">Forgot</a>
              </label>
              <input className="password" value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" required />

              <button className="submit" onClick={() => loginClick()} type="button">Login</button>
            </form>

            <p className="signup">
              No account yet? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login