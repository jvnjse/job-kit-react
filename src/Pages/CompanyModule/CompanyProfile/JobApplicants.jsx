import React, { useState } from 'react'
import employeeprofile from "../../../Assets/Images/employeeprofile.png"
import EmployeeDescription from '../Home/EmployeeDescription';

function JobApplicants() {
    const [employeedetailmodal, setemployeeDetailModal] = useState(false);


    const closemodal = () => {
        setemployeeDetailModal(false);
    };

    const handleemployeeBoxClick = () => {
        setemployeeDetailModal(true);
    };

    return (
        <div className=' px-8 py-4'>
            <div className='flex'>
                <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Job Vacancies</div>
            </div>
            <div className="flex flex-col gap-4 mt-5">
                <div onClick={handleemployeeBoxClick} className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>
                <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>
                <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>
                <div className=' bg-primary_white flex px-3 py-2 pr-14 rounded-xl gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className='w-20 h-20 rounded-lg -ml-5'>
                        <img src={employeeprofile} alt="" className=' object-fill ' />
                    </div>
                    <div className='flex flex-col justify-center -mt-4'>
                        <div className=' text-base font-semibold'>Name of Applicant</div>
                        <div className=' text-[10px] font-thin'>Job Role</div>
                        <div className=' flex flex-col'>
                        </div>
                    </div>
                    <div className='  absolute bottom-1 right-3 bg-primary_blue text-white px-2 rounded-2xl text-[8px]'>View Details</div>
                </div>

            </div>
            {employeedetailmodal && (
                <div className="" onClick={closemodal}>
                    <div className="absolute top-0 left-0 bg-neutral-700/70 w-full flex justify-center">
                        {/* <employeeDescription />jshbjhbhjsbjb */}
                        <EmployeeDescription />
                    </div>
                </div>
            )}

        </div>
    )
}

export default JobApplicants