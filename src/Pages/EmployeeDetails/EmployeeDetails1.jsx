import React from 'react'
import logoimage from "../../Assets/Images/logo.png"
import "./employeedetails1.css"
import PersonalDetails from './PersonalDetails/PersonalDetails'


function EmployeeDetails1() {
    return (
        <div className='employee-details '>
            <div className='navbody w-screen p-2 flex justify-between item-center'>
                <div className="logo">
                    <img src={logoimage} alt="" />
                </div>
                <div className="tabs flex items-center">
                    <p className="tab ">Contact Us</p>
                </div>
            </div>
            <PersonalDetails />
        </div>
    )
}

export default EmployeeDetails1