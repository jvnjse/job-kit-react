import React, { useState } from 'react'
import logo from "../../../Assets/Images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className='flex justify-between items-center px-10 py-3 bg-primary_white relative'>
                <div>
                    <img src={logo} alt="" className=' h-12' />
                </div>
                <div className="md:hidden text-2xl ">
                    <button
                        onClick={toggleMenu}
                        className=" focus:outline-none"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                <div className=' flex gap-5 items-center max-md:hidden'>
                    <div className=' cursor-pointer'>Jobs</div>
                    <div className=' cursor-pointer'>Companies</div>
                    <div className=' cursor-pointer'>About Us</div>
                    <div className=' cursor-pointer'>Contact Us</div>
                </div>


            </div >
            <div className={`${isMenuOpen ? 'block' : 'hidden'
                } absolute right-2 top-12 bg-white/95 rounded-lg overflow-hidden md:hidden z-50 `}>
                <div className='py-3 border px-10  cursor-pointer'>Jobs</div>
                <div className='py-3 border px-10 cursor-pointer'>Companies</div>
                <div className='py-3 border px-10 cursor-pointer'>About Us</div>
                <div className='py-3 border px-10 cursor-pointer'>Contact Us</div>

            </div>
        </>
    )
}

export default Nav