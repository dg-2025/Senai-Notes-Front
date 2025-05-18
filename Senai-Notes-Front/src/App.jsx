// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/newuser';
import Login from './pages/login';
import TelaConfig from './pages/TelaConfig/index'
import TelaNotas from './pages/TelaNotas/index'
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
      <Route path="/TelaConfig" element={<TelaConfig/>}> </Route>
      <Route path="/TelaNotas" element={<TelaNotas/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>
      <Route path="/forgotpassword" element={<ForgotPassword/>}> </Route>



     </Routes>
     
     </BrowserRouter>

     {/* <ResetPassword /> */}
    </>
  );
}

export default App
