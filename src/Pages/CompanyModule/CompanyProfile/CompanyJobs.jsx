import React, { useState } from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
// import JobDescription from '../../EmployeeModule/Home/JobDescription';
import { useNavigate, Link } from "react-router-dom"

function CompanyJobs() {
    const navigate = useNavigate()

    const handleJobBoxClick = () => {
        navigate("/employee/jobdetails")

    };


    return (
        <div className=' px-8 py-4'>
            <div className='flex'>
                <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Job Vacancies</div>
            </div>
            <div className='whitespace-nowrap w-min mt-4 text-sm px-2 bg-primary_blue py-1 text-text_white_primary_color rounded-lg cursor-pointer'>Add Employees</div>
            <div className="flex flex-col gap-4 mt-5">

                <Link to={"/employee/jobdetails"}>
                    <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
                        <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                            <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                        </div>
                        <div className='flex flex-col'>
                            <div className=' text-base font-semibold'>Job Title</div>
                            <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                            <div className=' flex gap-2 mt-1'>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                                <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
                            </div>
                        </div>
                        <div className=' text-button_primary_color absolute top-1 right-2'></div>
                    </div>
                </Link>
                <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                        <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                    </div>
                    <div className='flex flex-col'>
                        <div className=' text-base font-semibold'>Job Title</div>
                        <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=' flex gap-2 mt-1'>
                            <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                            <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
                        </div>
                    </div>
                    <div className=' text-button_primary_color absolute top-1 right-2'></div>
                </div>
                <div className=' bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer max-w-max'>
                    <div className=' bg-background_grey_color w-14 h-14 rounded-xl'>
                        <img src={companylogo} alt="" className=' object-cover mix-blend-multiply' />
                    </div>
                    <div className='flex flex-col'>
                        <div className=' text-base font-semibold'>Job Title</div>
                        <div className=' text-[10px] font-thin'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=' flex gap-2 mt-1'>
                            <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>View Details</div>
                            <div className='  text-[8px] text-text_white_primary_color bg-primary_blue px-1 rounded-lg'>Remote</div>
                        </div>
                    </div>
                    <div className=' text-button_primary_color absolute top-1 right-2'></div>
                </div>

            </div>
        </div>
    )
}

export default CompanyJobs