import React from 'react'
import logoimage from "../Assets/Images/logo.png"
import "./employeedetails1.css"


function EmployeeDetails1() {
    return (
        <div className='employee-details'>
            <div className='navbody w-screen p-2 flex justify-between item-center'>
                <div className="logo">
                    <img src={logoimage} alt="" />
                </div>
                <div className="tabs flex items-center">
                    <p className="tab ">Contact Us</p>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div>
                    <label className='flex flex-col'>Full Name
                        <input type='password' className='signup-input border border-black-950 w-64 h-8 ' />
                    </label>
                    <label className='flex flex-col'>Mobile
                        <input type='password' className='signup-input border border-black-950 w-64 h-8 ' />
                    </label>
                    <label className='flex flex-col'>Address Line 1
                        <input type='password' className='signup-input border border-black-950 w-64 h-8 ' />
                    </label>
                </div>
                <div className="flex flex-col">
                    opo
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails1