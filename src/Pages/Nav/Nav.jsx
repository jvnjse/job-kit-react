import React from 'react'
import logo from "../../Assets/Images/logo.png"

function Nav() {
    return (
        <div className='flex justify-between px-10 py-3 bg-primary_white'>
            <div>
                <img src={logo} alt="" className=' h-12' />
            </div>
            <div className=' flex gap-5 items-center'>
                <div className=' cursor-pointer'>Jobs</div>
                <div className=' cursor-pointer'>Companies</div>
                <div className=' cursor-pointer'>About Us</div>
                <div className=' cursor-pointer'>Contact Us</div>
            </div>
        </div>
    )
}

export default Nav