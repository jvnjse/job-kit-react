import React, { useState } from "react";
import "./login.css";
import logoimage from "../../Assets/Images/logo.png";
import MakeApiRequest from "../../Functions/AxiosApi";
import Cookies from "js-cookie";
import config from "../../Functions/config";

const AdminLogin = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      email_or_username: emailOrUsername,
      password: password
    };

    MakeApiRequest('POST', `${config.baseUrl}authentication/login/`, {}, data)
      .then((response) => {
        console.log(response);
        Cookies.set("user_id", response.user_id, { expires: 5 });
        Cookies.set("access_token", response.access_token, { expires: 5 });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="navbody w-screen p-2 flex justify-between item-center">
        <div className="logo">
          <img src={logoimage} alt="" />
        </div>
        <div className="tabs flex items-center">
          <p className="tab ">Contact Us</p>
        </div>
      </div>

      <div className="login-body flex flex-row items-center justify-center">
        <div className="login-container flex">
          <div className="caption-container flex flex-col justify-center items-center p-8  w-96 max-sm:hidden max-md:hidden">
            <div className="caption text-3xl font-bold text-left w-full">
              Lorem ipsum <br></br>dolor sit
            </div>
            <div className="sub-caption text-xs text-start w-full break-all pr-6 ">
              Lorem ipsum dolor sit amet consectetur. Orci tellus scelerisque
              lectus dui purus cras. Donec phasellus feugiat pretium vel aliquet
              urna.
            </div>
          </div>

          <div className="login-form-container flex flex-col items-center px-14 py-5 ">
            <div className="w-full text-left text-2xl font-semibold">
              {" "}
              Sign In
            </div>
            <label className="flex flex-col">
              Email or Username
              <input
                type="text"
                className="signup-input border border-black-950 w-64 h-8 "
                name="email"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
            </label>

            <label className="flex flex-col">
              Password
              <input
                type="password"
                className="signup-input border border-black-950 w-64 h-8 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="signup-btn text-center w-full cursor-pointer mt-4" onClick={handleLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

