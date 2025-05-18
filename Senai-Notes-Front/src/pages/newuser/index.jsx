import React, { useState } from 'react';
import './newuser.css';
import logo from '../../assets/imgs/logowhite.png';
import infoIcon from '../../assets/imgs/info circle.png';

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const OnNewUserClick = async () => {

    if (email == "") {
      alert("Preencha o e-mail.")
      return;
    }

    if (password == "") {
      alert("Preencha a senha.")
      return;
    }

    if (password != password) {
      alert("As senhas não conferem")
      return;
    }

    let response = await fetch("http://localhost:3000/users", {

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

      alert("Cadastro Realizado com sucesso");

      console.log(response);

      let json = await response.json();

      let token = json.accessToken;
      let userId = json.user.id;

      console.log("Token" + token);

      //LOCALSTORAGE

      localStorage.setItem("meuToken", token);
      localStorage.setItem("meuId", userId)

      window.location.href = "/login";

    } else {

      if (response.status == 401) {

        alert("Credenciais Incorretas. Tente Novamente.");

      } else {

        alert("Erro inesperado aconteceu, caso persista contate os administradores");

      }
    }
  }


  return (
    <>
      <div className="global-root">
        <div className="newuser-root">
          <div className="login-box">
            <img src={logo} alt="Logo Senai Notes" className="logo" />
            <p className="subtitle">Create Your Account</p>
            <p className="instruction">
              Sign up to start organizing your notes and boost your productivity.
            </p>

            <form>
              <label htmlFor="email">Email Address</label>
              <input className="email" value={email} onChange={event => setEmail(event.target.value)} type="email" id="email" placeholder="email@example.com" required />

              <label htmlFor="password">Password</label>
              <input className="password" value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" required />

              <div className="note">
                <img src={infoIcon} alt="Info Icon" />
                <span>At least 8 characters</span>
              </div>

              <button className="submit" onClick={() => OnNewUserClick()} type="button">Sign up</button>
            </form>

            <p className="login">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>

    </>

  );
}





export default SignUp