import React, { useState } from 'react';
import './login.css';
import logo from '../../assets/imgs/logowhite.png'; // ajuste o caminho se necessário
import '../../assets/styles/global.css'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const loginClick = async () => {

    if (email == "obamapresidente@email.com" && password == "12345678") {

      let token = "meuToken";
      let userId = "userID";
  
      localStorage.setItem("meuToken", token);
      localStorage.setItem("userID", userId)
  
      alert ("Login Realizado com sucesso!");
  
      window.location.href="/notes";

    } else {
  
      alert("Credenciais Incorretas.");
      return;
    }

    let response = await fetch("http://localhost:3000", {

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

      let json = await response.json()
      
      let token = json.acessToken;
      let userId = json.user.id;

      console.log ("Token" + token);

      localStorage.setItem("meuToken", token)
      localStorage.setItem("meuId", userId)
    }
  }




  return (

    <> 

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

    </>
  );
}

export default Login