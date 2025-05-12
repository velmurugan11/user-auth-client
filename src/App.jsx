import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from './LoginPage';

import LoginPage1 from "./components/LoginPage1/LoginPage1";
import HomePage from "./Pages/HomePage";
import Otp from "./components/OtpPage/Otp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage1 />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
