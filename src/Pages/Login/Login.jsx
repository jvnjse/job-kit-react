import React, { useState } from 'react';
import "./login.css";
import logoimage from "../../Assets/Images/logo.png"
import MakeApiRequest from '../../Functions/AxiosApi';
import Cookies from "js-cookie";
import config from '../../Functions/config';

function Login() {
    const [loginbox, setLoginbox] = useState(true)
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [usernameTaken, setUsernameTaken] = useState(false);
    const [password, setPassword] = useState()
    function Register() {
        setLoginbox(!loginbox)
    }
    const headers = {
        'Content-Type': 'application/json'
    }
    const data1 = {
        "email": email,
        "username": username,
        "password": password
    }
    const data = {
        "email_or_username": email,
        "password": password
    }

    const handleUsernameChange = (event) => {
        const { value } = event.target;
        setUsername(value.toLowerCase());
        //  setUsername(event.target.value)
        
        if (loginbox) {
            checkUsernameAvailability(value);
        }
       
    };
    console.log(loginbox, "loginbox")
    console.log(username)
    const checkUsernameAvailability = async (value) => {
        MakeApiRequest('GET', `${config.baseUrl}check-username/?username=${value}`, headers)
            .then((response) => {
                console.log(response, '1st')
               
                setUsernameTaken(response.username_taken);
            })
            .catch((error) => {
                console.log(error)
            })
    };
    
    

    const HandleRegister = () => {
        MakeApiRequest('POST', `${config.baseUrl}authentication/register/employee/`, headers, data1)
            .then((response) => {
                console.log(response)
                setEmail("")
                setPassword("")
                setUsername("")
                window.location.href = "/verify-otp";
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const HandleLogin = () => {
        MakeApiRequest('POST', `${config.baseUrl}authentication/login/`, headers, data)
            .then((response) => {
                console.log(response)
                Cookies.set("user_id", response.user_id, { expires: 5 });
                Cookies.set("access_token", response.access_token, { expires: 5 });
                // window.location.href = "/employee/employee-profile";
                  // Check the user type and redirect accordingly
                  if (response.user === "company") {
                      window.location.href = "/company/profile";
                  } else {
                      window.location.href = "/employee/employee-profile";
                  }

            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <div className='h-screen overflow-hidden'>
            <div className='navbody w-screen p-2 flex justify-between item-center'>
                <div className="logo">
                    <img src={logoimage} alt="" />
                </div>
                <div className="tabs flex items-center">
                    <p className="tab ">Contact Us</p>
                </div>
            </div>
            <div className='login-body flex flex-row items-center justify-center'>
                <div className="login-container flex">
                    {loginbox &&
                        <div className="caption-container flex flex-col justify-center items-center p-8  w-96 max-sm:hidden max-md:hidden">
                            <div className="caption text-3xl font-bold text-left w-full">Lorem ipsum <br></br>dolor sit</div>
                            <div className="sub-caption text-xs text-start w-full break-all pr-6 ">Lorem ipsum dolor sit amet consectetur. Orci tellus scelerisque lectus dui purus cras. Donec phasellus feugiat pretium vel aliquet urna.</div>
                        </div>}
                    <div className="login-form-container flex flex-col items-center px-14 py-5 ">
                        <div className='w-full text-left text-2xl font-semibold' >{loginbox ? "Sign Up" : "Sign In"}</div>
                        <label className='flex flex-col'>{loginbox ? "Email" : "Email or Username"}
                            <input type='text' className='signup-input border border-black-950 w-64 h-8 ' name='email'  value={email || ''}  onChange={(e) => { setEmail(e.target.value.toLowerCase()) }} />
                        </label>
                        {loginbox && <div>
                            <label className='flex flex-col'>User name
                            {usernameTaken && <div className='text-red-600 text-xs' >Username is already taken</div>}
                                <input type='text' className='signup-input border border-black-950 w-64 h-8 ' name='username'  value={username || ''} onChange={ handleUsernameChange} />
                            </label>

                         
                          
                            

                        </div>}
                        <label className='flex flex-col'>Password
                            <input type='password' className='signup-input border border-black-950 w-64 h-8 ' onChange={(e) => { setPassword(e.target.value) }} />
                        </label>
                        {loginbox ?
                            <div className="signup-btn text-center w-full cursor-pointer mt-4" onClick={() => { HandleRegister() }}>Register
                            </div> :
                            <div className="signup-btn text-center w-full cursor-pointer mt-4" onClick={() => { HandleLogin() }}>Login
                            </div>}



                        <div className="account-question text-xs text-center mt-7">{loginbox ? "Already Have An Account?" : "Don’t Have An Account?"}</div>
                        <div className="login-link-btn text-center mt-3 cursor-pointer p-2" onClick={Register}>{loginbox ? "Log In Now" : "Register Now"}</div>
                    </div>
                    {!loginbox &&
                        <div className="caption-container flex flex-col justify-center items-center p-8  w-96 max-sm:hidden max-md:hidden">
                            <div className="caption text-3xl font-bold text-left w-full">Lorem ipsum <br></br>dolor sit</div>
                            <div className="sub-caption text-xs text-start w-full break-all pr-6 ">Lorem ipsum dolor sit amet consectetur. Orci tellus scelerisque lectus dui purus cras. Donec phasellus feugiat pretium vel aliquet urna.</div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Login