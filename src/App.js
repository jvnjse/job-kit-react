import React from "react";
import "./App.css";
import EmployeeDetails1 from "./EmployeeDetails/EmployeeDetails1";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifyOtp from "./Verify-Otp/VerifyOtp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/employee-details" element={<EmployeeDetails1 />} />
          <Route path="/employee-login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
