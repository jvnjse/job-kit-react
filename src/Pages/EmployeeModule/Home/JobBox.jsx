import React from 'react';
import "./home.css";
import companylogo from "../../../Assets/Images/companylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function JobBox({ job, click }) {
    const { job_title, job_description, salary_range_from, salary_range_to, location, mode_of_work, tags } = job;

    return (
        <div className='bg-primary_white flex p-3 rounded-lg gap-2 shadow-md relative cursor-pointer' onClick={click}>
            <div className='bg-background_grey_color w-14 h-14 rounded-xl'>
                <img src={companylogo} alt="" className='object-cover mix-blend-multiply' />
            </div>
            <div className='flex flex-col'>
                <div className='text-base font-semibold'>{job_title}</div>
                <div className='text-[10px] font-thin'>{job_description}</div>
                <div className='text-xs font-semibold'>₹{salary_range_from} - ₹{salary_range_to}</div>
                <div className='flex gap-2'>
                    <div className='text-[8px] bg-background_grey_color px-1 rounded-lg'>{location}</div>
                    <div className='text-[8px] text-green-600'>{mode_of_work}</div>
                    {tags && tags.map((tag, index) => (
                        <div key={index} className='text-[8px] bg-background_grey_color px-1 rounded-lg'>{tag.name}</div>
                    ))}
                </div>
            </div>
            <div className='text-button_primary_color absolute top-1 right-2'>
                <FontAwesomeIcon icon={faBookmark} />
            </div>
        </div>
    );
}

export default JobBox;

