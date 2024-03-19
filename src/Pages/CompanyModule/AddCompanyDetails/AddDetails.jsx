import React from 'react'
import logoimage from "../../../Assets/Images/logo.png"
import Companyinfo from './CompanyDetails/Companyinfo'

function AddDetails() {
    return (
        <div>
            <div className='navbody w-screen p-2  px-5 flex justify-between item-center bg-white'>
                <div className="logo w-36">
                    <img src={logoimage} alt="" />
                </div>
                <div className="tabs flex items-center">
                    <p className="tab ">Contact Us</p>
                </div>
            </div>
            <Companyinfo />
        </div>
    )
}

export default AddDetails