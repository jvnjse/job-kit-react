import React, { useState } from 'react'
import "./login.css"

function Login() {
    const [loginbox, setLoginbox] = useState(true)


    function Register() {
        setLoginbox(!loginbox)

    }



    return (
        <div className='login-body flex flex-row items-center justify-center'>
            <div className="login-container flex">
                <div className="login-form-container flex flex-col items-center px-14 py-5 ">
                    <div className='w-full text-left text-2xl font-semibold' >{loginbox ? "Sign Up" : "Sign In"}</div>
                    <label className='flex flex-col'>Email
                        <input type='email' className='signup-input border border-black-950 w-64 h-8 ' />
                    </label>
                    <label className='flex flex-col'>Password
                        <input type='password' className='signup-input border border-black-950 w-64 h-8 ' />
                    </label>
                    {loginbox && <div>
                        <label className='flex flex-col'>Confirm Password
                            <input type='password' className='signup-input border border-black-950 w-64 h-8 ' />
                        </label>
                    </div>}
                    <div className="signup-btn text-center w-full cursor-pointer mt-4">
                        {loginbox ? "Register" : "Log In"}
                    </div>
                    <div className="account-question text-xs text-center mt-7">{loginbox ? "Already Have An Account?" : "Don’t Have An Account?"}</div>
                    <div className="login-link-btn text-center mt-3 cursor-pointer p-2" onClick={Register}>{loginbox ? "Log In Now" : "Register Now"}</div>
                </div>
                <div className="caption-container flex flex-col justify-center items-center p-8  w-96">
                    <div className="caption text-3xl font-bold text-left w-full">Lorem ipsum <br></br>dolor sit</div>
                    <div className="sub-caption text-xs text-start w-full break-all pr-6 ">Lorem ipsum dolor sit amet consectetur. Orci tellus scelerisque lectus dui purus cras. Donec phasellus feugiat pretium vel aliquet urna.</div>
                </div>
            </div>
        </div>
    )
}

export default Login