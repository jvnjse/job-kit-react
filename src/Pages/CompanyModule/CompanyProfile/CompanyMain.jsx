import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import profileimage from "../../../Assets/Images/profileimage.png"

function CompanyMain() {
    const [jobpostmodal, setJobpostModal] = useState(false);

    const closemodal = () => {
        setJobpostModal(false);
    };

    const handlejobPostmodal = () => {
        setJobpostModal(true);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <div className='px-7 pt-10'>
            <div className='flex gap-3'>
                <div className=' w-24 h-24 rounded-2xl overflow-hidden'>
                    <img src={profileimage} alt="" />
                </div>
                <div>
                    <div className=' text-2xl font-semibold text-text_black_primary_color'>Company Name</div>
                    <div className=' text-sm '>Company Sector</div>
                    <div className=' text-xs'>Lorem ipsum dolor sit amet consectetur. Sed tincidunt viverra eget amet a cursus sed condimentum dictum.</div>
                </div>
            </div>
            <div className=' bg-primary_blue px-3 py-2 rounded-xl w-[130px] text-sm text-text_white_primary_color mt-3 cursor-pointer ' onClick={handlejobPostmodal}>Post a New Job</div>
            <div className=' text-lg font-bold mt-3'>About Company</div>
            <div className=' text-sm w-3/5 leading-4'>Lorem ipsum dolor sit amet consectetur. Volutpat et vivamus amet feugiat et nisi vulputate nullam cras. Sem quis dui metus diam in elit sollicitudin nec. In euismod justo sodales suscipit id duis.</div>
            <div className=' text-lg font-bold mt-3'>Add Company Working Sector <FontAwesomeIcon icon={faPlusCircle} /></div>
            <div className='flex gap-4'>
                <div className=' border border-gray-700 px-2 rounded-full'>IT</div>
                <div className=' border border-gray-700 px-2 rounded-full'>Developement</div>
                <div className=' border border-gray-700 px-2 rounded-full'>Finance</div>
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
                            <div className="flex justify-start gap-16 max-sm:flex-col max-sm:gap-2">
                                <label className='flex flex-col font-bold mt-3'>Location
                                    <input type="text" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Choose your Location' />
                                </label>
                                <label className='flex flex-col font-bold mt-3'>Mode of Work
                                    <input type="text" className='text-sm font-thin bg-gray-200 p-2 rounded-lg ' placeholder='Select the mode of work' />
                                </label>
                            </div>

                            <label className='flex flex-col font-bold mt-3'>Add Salary Range
                                <div className='flex gap-8 max-sm:flex-col max-sm:gap-2'>
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

export default CompanyMain