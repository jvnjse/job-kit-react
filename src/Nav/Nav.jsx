import React from 'react'
import "./nav.css"

function Nav() {
    return (
        <div className='navbody w-screen p-2 flex justify-between item-center'>
            <div className="logo">LOGO</div>
            <div className="tabs flex items-center">
                <p className="tab ">Contact Us</p>
            </div>
        </div>
    )
}

export default Nav