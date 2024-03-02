import React, { useState } from 'react'
import companylogo from "../../../Assets/Images/companylogo.png"
// import JobDescription from '../../EmployeeModule/Home/JobDescription';
import { Link } from "react-router-dom"

function CompanyJobs() {
    const [jobpostmodal, setJobpostModal] = useState(false);

    const closemodal = () => {
        setJobpostModal(false);
    };

    const handleemployeeBoxClick = () => {
        setJobpostModal(true);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    return (
        <div className=' px-8 py-4'>
            <div className='flex'>
                <div className=' text-2xl font-bold text-text_black_primary_color select-none'>Job Vacancies</div>
            </div>
            <div onClick={handleemployeeBoxClick} className='whitespace-nowrap w-min mt-4 text-sm px-2 bg-primary_blue py-1 text-text_white_primary_color rounded-lg cursor-pointer'>Add Job</div>
            <div className="flex flex-row flex-wrap gap-4 mt-5">
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
            </div>
            {jobpostmodal && (
                <div className="" onClick={closemodal}>
                    <div className="absolute top-0 left-0 bg-neutral-700/70 w-full flex justify-center">
                        <div className=' w-9/12 bg-white mt-20 rounded-t-lg py-5 px-14 max-sm:w-full' onClick={stopPropagation}>
                            <label className='flex flex-col font-bold mt-3'>Job Title:
                                <input type="text" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Eg: HR Associate' />
                            </label>
                            <label className='flex flex-col font-bold mt-3'>Job Description:
                                <input type="text" className='h-16 text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='enter the job description' />
                            </label>
                            <label className='flex flex-col font-bold mt-3'>Qualifications & Requirements
                                <input type="text" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='enter the Qualifications & Requirements' />
                            </label>
                            <div className="flex justify-start gap-16">
                                <label className='flex flex-col font-bold mt-3'>Location
                                    <input type="text" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Choose your Location' />
                                </label>
                                <label className='flex flex-col font-bold mt-3'>Mode of Work
                                    <input type="text" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Select the mode of work' />
                                </label>
                            </div>

                            <label className='flex flex-col font-bold mt-3'>Add Salary Range
                                <div className='flex gap-8'>
                                    <input type="number" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='From' />
                                    <input type="number" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='To' />
                                </div>
                            </label>

                            <label className='flex flex-col font-bold mt-3'>Application Deadline
                                <input type="date" className='max-w-max text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Choose a Date' />
                            </label>
                            <label className='flex flex-col font-bold mt-3'>Keywords and Tags
                                <input type="text" className='h-16 text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Enter the keywords and tags related to the job' />
                            </label>

                            <label className='flex flex-col font-bold mt-3'>For Contact & Details
                                <input type="text" className=' text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Enter Contact Details' />
                            </label>
                            <div className=' bg-primary_blue px-3 py-2 rounded-xl max-w-max  text-text_white_primary_color mt-3 cursor-pointer float-right'>Post Job</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CompanyJobs