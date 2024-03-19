import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <div className='flex flex-col items-center text-center gap-3'>Main
            <Link to={"/login"}>
                <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>Login</div>
            </Link>
            <Link to={"/verify-otp"}>
                <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>verify otp</div>
            </Link>
            <div className=' flex justify-evenly gap-6'>
                <div className='flex flex-col gap-5'>Company
                    <Link to={"/company"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>company</div>
                    </Link>
                    <Link to={"/company/employeedetails"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>employee detail</div>
                    </Link>
                    <Link to={"/company/company-details"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>company detail</div>
                    </Link>
                    <Link to={"/company/profile"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>company profile</div>
                    </Link>
                </div>
                <div className='flex flex-col gap-5'>Employee
                    <Link to={"/employee"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>employee</div>
                    </Link>
                    <Link to={"/employee/employee-details"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>employee detail</div>
                    </Link>
                    <Link to={"/employee/company"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>company detail</div>
                    </Link>
                    <Link to={"/employee/employee-profile"}>
                        <div className='bg-blue-800  px-2 py-1 rounded-lg text-white text-center'>employee profile</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Links