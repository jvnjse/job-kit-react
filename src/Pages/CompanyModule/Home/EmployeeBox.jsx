import React from 'react'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import employeeprofile from "../../../Assets/Images/profilephotoemployee.png"
import { useEmployeeContext } from '../../../Contexts/EmployeeContext';

function EmployeeBox() {
    const { handleBoxClick } = useEmployeeContext();

    return (
        <div className=' bg-primary_white flex p-3 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer ' onClick={handleBoxClick}>
            <div className='w-20 h-20 rounded-xl -ml-5'>
                <img src={employeeprofile} alt="" className=' object-fill ' />
            </div>
            <div className='flex flex-col'>
                <div className=' text-base font-semibold'>Name of Employee</div>
                <div className=' text-[10px] font-thin'>Job Role</div>
                {/* <div className=' text-xs font-semibold'>₹180000 - ₹400000</div> */}
                <div className=' flex flex-col'>
                    <div className=' text-[8px] text-green-600'>Matches Your Job Description</div>
                    <div className='  text-[8px] bg-background_grey_color px-1 rounded-lg w-min mt-1'>Remote</div>
                </div>
            </div>
            <div className=' text-button_primary_color absolute top-1 right-3 '><FontAwesomeIcon icon={faBookmark} /></div>
        </div>
    )
}

export default EmployeeBox