import React from "react";
import "./App.css";
import Home_Page from "./Pages/Home_Page/Home_Page";
import Header from "./UI/Header";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Forgot_Password from "./Pages/Authentication/Forgot_Password";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Teams from "./Pages/Teams/Teams";
import About from "./Pages/Aboutus/About";
import Contact from "./Pages/Contact_Us/Contact";

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        {/* <Switch> */}
          {/* <Route exact path="/" element={<Home_Page />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot_Password />} /> */}
        {/* </Switch> */}
        {/* <Teams /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        <Home_Page />
      </div>
    // </BrowserRouter>
  );
}

export default App;
