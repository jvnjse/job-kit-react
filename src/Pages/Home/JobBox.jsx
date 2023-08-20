import React, { useState } from 'react'
import "./home.css"
import companylogo from "../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

function JobBox() {
    const [jobdetailmodal, setJobDetailModal] = useState(false)
    const navigate = useNavigate();

    const handleJobBoxDoubleClick = () => {
        navigate('/verify-otp');
    };
    const handleJobBoxClick = () => {
        setJobDetailModal(true)
    };

    return (
        <>
            <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative' onClick={handleJobBoxClick} onDoubleClick={handleJobBoxDoubleClick}>
                <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                    <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                </div>
                <div className='flex flex-col'>
                    <div className=' text-base font-semibold'>Job Title</div>
                    <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className=' text-xs font-semibold'>₹180000 - ₹400000</div>
                    <div className=' flex gap-2'>
                        <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg'>Remote</div>
                        <div className=' text-[8px] text-green-600'>Matches Your Skills</div>
                    </div>
                </div>
                <div className=' text-button_primary_color absolute top-1 right-2'><FontAwesomeIcon icon={faBookmark} /></div>
            </div>
            {jobdetailmodal &&
                <div className="absolute ">ghgjhgjh</div>
            }
        </>
    )
}

export default JobBox