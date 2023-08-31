import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import animationloading from "./Assets/Images/animationloading.png";
import Links from "./Links";
import AdminMain from "./Pages/AdminModule/AdminMain";

const AddDetails = lazy(() =>
  import("./Pages/CompanyModule/AddCompanyDetails/AddDetails")
);
const CompanyHome = lazy(() =>
  import("./Pages/CompanyModule/Home/CompanyHome")
);
const EmployeeDescription = lazy(() =>
  import("./Pages/CompanyModule/EmployeeDescription/EmployeeDescription")
);
const CompanyProfile = lazy(() =>
  import("./Pages/CompanyModule/CompanyProfile/CompanyProfile")
);
const EmployeeDetails1 = lazy(() =>
  import("./Pages/EmployeeModule/EmployeeDetails/EmployeeDetails1.jsx")
);
const Login = lazy(() => import("./Pages/Login/Login.jsx"));
const VerifyOtp = lazy(() => import("./Pages/Verify-Otp/VerifyOtp"));
const Home = lazy(() => import("./Pages/EmployeeModule/Home/Home"));
const JobDetail = lazy(() =>
  import("./Pages/EmployeeModule/JobDescription/JobDetail")
);
const Employeeprofile = lazy(() =>
  import("./Pages/EmployeeModule/EmployeeProfile/Employeeprofile")
);
const Companydetail = lazy(() =>
  import("./Pages/EmployeeModule/CompanyPage/Companydetail")
);

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div className=" w-full flex justify-center items-center h-screen">
              <img
                className="w-20 animate-spin"
                alt=""
                src={animationloading}
              ></img>
            </div>
          }
        >
          <Routes>
            <Route path="/verify-otp" element={<VerifyOtp />} />
            {/* EMPLOYEE LINKS */}
            <Route path="/employee" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/employee/employee-details"
              element={<EmployeeDetails1 />}
            />
            <Route path="/employee/jobdetails" element={<JobDetail />} />
            <Route
              path="/employee/employee-profile"
              element={<Employeeprofile />}
            />
            <Route path="/employee/company" element={<Companydetail />}></Route>
            {/* COMPANY LINKS */}
            <Route path="/company" element={<CompanyHome />} />
            <Route path="/company/company-details" element={<AddDetails />} />
            <Route
              path="/company/employeedetails"
              element={<EmployeeDescription />}
            />
            <Route path="/company/profile" element={<CompanyProfile />} />
            <Route path="/" element={<Links />} />
            <Route path="/admin" element={<AdminMain />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
