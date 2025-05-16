// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/newuser';
import Login from './pages/login';
import ForgotPassword from './pages/forgotpasssword';
import ResetPassword from './pages/resetpassword';


function App() {

  // const isAutenticated = () => {

  //   let token = localStorage.getItem("meuToken")

  //   if (token == null) {

  //     return false;

  //   } else {

  //     return true;

  //   }
  // }

  //javascript


  return (
    <>
     <BrowserRouter>
     
     <Routes>

      <Route path="/" element={<Login/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>
      <Route path="/forgotpassword" element={<ForgotPassword/>}> </Route>



     </Routes>
     
     </BrowserRouter>
    </>
  );
}

export default App
