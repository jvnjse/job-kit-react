import React from "react";
import "./App.css";
import EmployeeDetails1 from "./Pages/EmployeeDetails/EmployeeDetails1.jsx";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifyOtp from "./Pages/Verify-Otp/VerifyOtp";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/employee-details" element={<EmployeeDetails1 />} />
          <Route path="/employee-login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
