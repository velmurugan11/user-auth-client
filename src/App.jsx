import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './LoginPage';
import LoginPage1 from './LoginPage1';
import HomePage from './HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage1 />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
